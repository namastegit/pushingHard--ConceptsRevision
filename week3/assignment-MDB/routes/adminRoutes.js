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

app.listen(3000, () => {
    console.log("http://localhost:3000");
});
