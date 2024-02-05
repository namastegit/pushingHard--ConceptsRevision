const { User } = require("../database/index");

async function userSignInMiddleware(req, res, next) {
    const email = req.headers.email;
    const password = req.headers.password;

    try {
        const user = await User.findOne({
            email: email,
            password: password
        });

        if (user) {
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

async function userSignUpMiddleware(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            email: email,
            password: password
        });

        if (user) {
            res.status(403).json({
                msg: "User already exists"
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

module.exports = { userSignInMiddleware, userSignUpMiddleware };
