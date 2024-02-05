const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;

    try {
        if (!token) {
            throw new Error('Token not provided');
        }

        const decodedValue = jwt.verify(token.split(' ')[1], JWT_SECRET);

        if (!decodedValue.username) {
            throw new Error('Invalid token');
        }

        req.username = decodedValue.username;
        next();
    } catch (error) {
        res.status(403).json({
            msg: error.message || 'Authentication failed'
        });
    }
}

module.exports = userMiddleware;
