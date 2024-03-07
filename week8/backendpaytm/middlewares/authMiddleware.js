const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function authMiddleware(req, res, next) {
    try {
        const token = req.headers.token;
        const id = req.headers.id;

        const decodedToken = jwt.verify(token, JWT_SECRET);

        if (decodedToken.newUserid !== id) {
            res.json({
                msg: "Invalid Credentials - Token"
            });
        } else {
            req.userId = decodedToken.id;
            next();
        }
    } catch (error) {
        console.log(`Found Error: ${error}`);
        res.status(500).json({ error: "Server Error" });
    }
}

module.exports = authMiddleware;
