const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        const id = req.headers.id;

        const decodedToken = jwt.verify(token, JWT_SECRET);

        if (decodedToken.id !== id) {
            res.json({
                msg: "Invalid Credentials - Token"
            });
        } else {
            req.id = decodedToken.id; 
            next();
        }
    } catch (error) {
        console.log(`Found Error: ${error}`);
        res.status(500).json({
            msg: "Server Error - Token"
        });
    }
}

module.exports = authMiddleware;
