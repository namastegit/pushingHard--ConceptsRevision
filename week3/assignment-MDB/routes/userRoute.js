const express = require("express");
const { User, Course } = require("../database/index");
const { userSignUpMiddleware, userSignInMiddleware } = require("../middlewares/user");

const app = express();
app.use(express.json());

app.post("/usersignup", userSignUpMiddleware, async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await User.create({
        email: email,
        password: password
    });
    
    res.json({
        msg: "User created Successfully"
    });
});

app.post("/usersignin", userSignInMiddleware, async (req, res) => {
    const email = req.headers.email;
    const password = req.headers.password;

    // Add authentication logic here, and respond accordingly

    res.json({
        msg: "Logged in successfully"
    });
});

app.post("/purchasecourse/:courseId", userSignInMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const email = req.headers.email;

    try {
        await User.updateOne({
            email,
        }, {
            $push: {
                purchasedCourses: courseId
            }
        });

        res.json({
            msg: "Course purchased successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
});

app.listen(3001, () => {
    console.log("http://localhost:3001");
});
