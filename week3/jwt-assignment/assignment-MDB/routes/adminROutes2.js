const express = require("express");
const jwt = require("jsonwebtoken");
const routes = require("express");
const { JWT_SECRETS } = require("../config2");

const app = express();
app.use(express.json());

app.post("/signup", adminSignupMiddleware, async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const newAdmin = await Admin.create({
            username,
            password,
        });
    }
    catch{
        res.status(403).json({
            msg: "Unauthorised access"
        });
    };

});

app.post("/signin", async(req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    try{
      const token = await jwt.sign({username}, JWT_SECRETS);
      res.json({
        msg : token
      });
       
    }
    catch{
        res.status(403).json({
            msg: "Token creation fail"
        });
    };

});

app.post("/courses",adminSigninMiddleware, async(req, res) => {
    const title = req.body.title;
    const price = req.headers.price

    try{
   const newCourse = Course.create({
    title,
    price
   });
      
       
    }
    catch{
        res.status(403).json({
            msg: "Course creaton failed"
        });
    };

});

app.get("/getAllCourses", async(req, res) => {
    const allCourses = await Course.find({});
    res.json({
        msg : allCourses
    })
})