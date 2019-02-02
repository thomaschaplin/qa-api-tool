const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, config.privateSecret)
        req.tokenData = decodedToken
        next()
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'Unauthroised',
            errors: true
        })
    }
}