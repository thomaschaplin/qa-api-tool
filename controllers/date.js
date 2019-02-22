const _ = require('lodash')

class DateController {

    getTodaysDate(req, res) {
        return res.status(200).json({
            success: true,
            message: 'Todays date retrieved successfully',
            errors: false,
            date: new Date()
        })
    }
}

const dateController = new DateController()

module.exports = {
    dateController
}