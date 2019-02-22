const _ = require('lodash')
const firstnames = require('../db/firstnames').firstnames
const lastnames = require('../db/lastnames').lastnames

class UserController {

    getAllFirstnames(req, res) {
        return res.status(200).json({
            success: true,
            message: 'All firstnames retrieved successfully',
            errors: false,
            firstnames: firstnames
        })
    }

    getAllLastnames(req, res) {
        return res.status(200).json({
            success: true,
            message: 'All lastnames retrieved successfully',
            errors: false,
            lastnames: lastnames
        })
    }

    getRandomFirstname(req, res) {
        return res.status(200).json({
            success: true,
            message: 'Random firstname retrieved successfully',
            errors: false,
            firstname: _.sample(firstnames)
        })
    }

    getRandomLastname(req, res) {
        return res.status(200).json({
            success: true,
            message: 'Random lastname retrieved successfully',
            errors: false,
            lastname: _.sample(lastnames)
        })
    }

    getRandomName(req, res) {
        const firstname = _.sample(firstnames)
        const lastname = _.sample(lastnames)
        return res.status(200).json({
            success: true,
            message: 'Random name retrieved successfully',
            errors: false,
            firstname: firstname,
            lastname: lastname,
            name: `${firstname} ${lastname}`
        })
    }

    getRandomGender(req, res) {
        return res.status(200).json({
            success: true,
            message: 'Random gender retrieved successfully',
            errors: false,
            gender: _.sample(['male', 'female'])
        })
    }
}

const userController = new UserController()

module.exports = {
    userController
}