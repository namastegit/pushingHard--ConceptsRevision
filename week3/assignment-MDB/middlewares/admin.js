const { Admin } = require("../database/index");

async function adminSignInMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const admin = await Admin.findOne({
            username: username,
            password: password
        });

        if (admin) {
            next();
        } else {
            res.status(403).json({
                msg: "Invalid credentials"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

async function adminSignUpMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const admin = await Admin.findOne({
            username: username,
            password: password
        });

        if (admin) {
            res.status(403).json({
                msg: "Admin already exists"
            });
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

module.exports = { adminSignInMiddleware, adminSignUpMiddleware };
