const jwt = require('jsonwebtoken')
const config = require('../config')

class AuthController {

    login(req, res) {
        if (req.body.username === 'root' && req.body.password === 'admin' && req.body.secret === config.publicSecret) {
            const token = jwt.sign({
                username: req.body.username
            },
                config.privateSecret,
                {
                    expiresIn: config.expiresIn,
                    notBefore: config.notBefore
                })
            return res.status(200).json({
                success: true,
                message: 'Authorised',
                errors: false,
                token: token,
                expiresIn: config.expiresIn
            })
        }
        else {
            res.status(401).json({
                success: false,
                message: 'Unauthroised',
                errors: true
            })
        }
    }
}

const authController = new AuthController()

module.exports = {
    authController
}