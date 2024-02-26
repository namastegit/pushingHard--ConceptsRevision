const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

async function signinMiddleware(req, res, next) {
    const username = req.headers.username;
    const token = req.headers.token;
    const finding =  jwt.verify(token, JWT_SECRET);


if(finding.username === username) {
    

    next();
    // return username;
}
else{
    res.json({
        msg : "Credentials not matched!!"
    });
}
}

module.exports = 
    signinMiddleware ;