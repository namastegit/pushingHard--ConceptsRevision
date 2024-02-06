const express = require("express");
const jwt = require("jsonwebtoken");
const { JWT_SECRETS } = require("../config2");
const app = express();

app.use(express.json());


async function adminSignupMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const token = req.headers.token;
    const words = token.split(" ");
    const jwtToken = words[1];
    
    try{
const decode = await jwt.verify(jwtToken, JWT_SECRETS);
const decodedValue =  await decode.json();

if(decodedValue.username){
    next();
    res.json({
        msg : "Username verified"
    });
}

    }catch{}

    const AdminFound = await Admin.findOne({
        username:username,
        password:password
    });

    if
}