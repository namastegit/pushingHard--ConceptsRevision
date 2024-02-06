const express = require("express");
const jwt = require("jsonwebtoken");
const routes = require("express");

const app = express();
app.use(express.json());

app.post("/signup", adminSignupMiddleware, async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const newAdmin = Admin.create({
            username,
            password,
        });
    }
    catch{
        res.status(403).json({
            
        })
    }

})