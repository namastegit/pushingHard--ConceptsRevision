const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

async function SigninMiddleware(req, res, next) {
    const username = req.headers.username;
    const token = req.headers.token;

    try {
        const verification = jwt.verify(token, JWT_SECRET);
        if (verification.username === username) {
            next();
        } else {
            res.status(401).json({ msg: "Unauthorized" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" });
    }
}

module.exports = SigninMiddleware;
