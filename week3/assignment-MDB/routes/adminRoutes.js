const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const {Admin, Course} = require("../database");
const router = expres.Router();


const app = express();
app.use(express.json());

app.get("/signup", adminMiddleware, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
});

app.post("/addingCourse", adminMiddleware, (req, res) => {
    if(adminMiddleware){
        const course = $push.Course({
            title: req.body.title,
            price: req.body.price,
        })
    }
})