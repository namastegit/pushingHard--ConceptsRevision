
const express = require("express");
const { User, Course } = require("../database/index");
const { usersignUpMiddleware, usersignInMiddleware } = require("../middlewares/user");

const app = express();
app.use(express.json());

app.post("/usersignup", usersignUpMiddleware, async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = await User.create({
        username : username,
        password : password
    });
    res.json({
        msg : "User created Successfully"
    });

});

app.post("/usersignin", usersignInMiddleware, async(req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    res.json({
        msg : "Logged in successfully"
    });
});

app.post("/purchasecourse", usersignInMiddleware, async(req, res) => {
const courseId = req.params.courseId;
const username = req.headers.username;

User.updateOne({
    username,
},{
    "$push" : {
        purchasedCourses : courseId
    }
}
);


    
});

app.get("/allcoursesU", usersignInMiddleware, async(req, res) => {
    const allCoursesU = await User.purchasedCourses.find({});
    res.json({
        msg : allCoursesU
    })
})