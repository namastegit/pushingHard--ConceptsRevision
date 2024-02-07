const express = require("express");
const jwt = require("jsonwebtoken");
const { Admin, Courses } = require("../database");  // Update the path accordingly
const { JWT_SECRETS } = require("../config2");    // Update the path accordingly
const { adminSignupMiddleware, adminSigninMiddleware } = require("../middlewares/adminM2");  // Update the path accordingly

const app = express();
app.use(express.json());

app.post("/signup", adminSignupMiddleware, async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const newAdmin = await Admin.create({
      username,
      password,
    });

    res.json({
      msg: "Admin created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(403).json({
      msg: "Unauthorized access",
    });
  }
});

app.post("/signin", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const token = await jwt.sign({ username }, JWT_SECRETS);
    res.json({
      msg: token
    });

  } catch (error) {
    console.error(error);
    res.status(403).json({
      msg: "Token creation failed"
    });
  }
});

app.post("/courses", adminSigninMiddleware, async (req, res) => {
  const title = req.body.title;
  const price = req.headers.price;

  try {
    const newCourse = await Courses.create({
      title,
      price
    });

    res.json({
      msg: "Course created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(403).json({
      msg: "Course creation failed"
    });
  }
});

app.get("/getAllCourses", async (req, res) => {
  try {
    const allCourses = await Courses.find({});
    res.json({
      msg: allCourses
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Internal Server Error"
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
