const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        let decodeData = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodeData?.id;

        next();
    } catch (error) {
        console.log(err);
    }
}

module.exports = auth;