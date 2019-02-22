const _ = require('lodash')

class NumberController {

    getRandomNumber(req, res) {
        if (req.body.min == undefined || req.body.max == undefined) {
            return res.status(400).json({
                success: false,
                message: 'Min or max value has not been sent',
                errors: true
            })
        }
        else if (req.body.min == undefined && req.body.max == undefined) {
            return res.status(400).json({
                success: false,
                message: 'Min and max value has not been sent',
                errors: true
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Random number retrieved successfully',
            errors: false,
            number: _.random(req.body.min, req.body.max)
        })
    }
}

const numberController = new NumberController()

module.exports = {
    numberController
}