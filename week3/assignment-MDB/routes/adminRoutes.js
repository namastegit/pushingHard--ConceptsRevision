const express = require("express");
const { adminSignInMiddleware, adminSignUpMiddleware } = require("../middlewares/admin");
const { Admin, Course } = require("../database/index");

const app = express();
app.use(express.json());
app.post("/signup", adminSignUpMiddleware, async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        await Admin.create({
            username: username,
            password: password
        });

        res.json({
            msg: "Admin created Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});


app.post("/signin", adminSignInMiddleware, (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    res.json({
        message: 'Admin logged in Successfully'
    });
});

app.post("/courses", adminSignInMiddleware, async(req, res) => 
{
    try{
    const title = req.body.title;
    const price = req.body.price;

   const newCourse = await Course.create({
        title,
        price,
    });
    res.json({
        msg : "Course created successfully", courseId : newCourse._id
    });
} catch (error) {
    console.error(error);
    res.status(500).json({
        msg: "Internal Server Error"
    });
}
});

app.get("/allcourses", adminSignInMiddleware, async (req, res) => {
    const allcourses = await Course.find({});
    res.json({
        msg : allcourses
    });

});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
