const frisby = require('frisby')
const Joi = frisby.Joi

const url = 'http://localhost:3000/api/v1/auth/login'

describe('Authentication', () => {

    test('should return 401 if no body is supplied', () => {
        return frisby.post(url, null)
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no username is supplied', () => {
        return frisby.post(url, { password: 'admin', secret: 'publicSecret' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no password is supplied', () => {
        return frisby.post(url, { username: 'root', secret: 'publicSecret' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no secret is supplied', () => {
        return frisby.post(url, { username: 'root', password: 'admin' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no username or password is supplied', () => {
        return frisby.post(url, { secret: 'publicSecret' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no username or secret is supplied', () => {
        return frisby.post(url, { password: 'admin' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test('should return 401 if no password or secret is supplied', () => {
        return frisby.post(url, { username: 'root', secret: 'publicSecret' })
            .expect('status', 401)
            .expect('json', {
                success: false,
                message: 'Unauthroised',
                errors: true
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })

    test.skip('should return 200 if correct username, password and secret is supplied', () => {
        return frisby.post(url, { username: 'root', password: 'admin', secret: 'publicSecret' })
            .expect('status', 200)
            .expect('json', {
                success: true,
                message: 'Authroised',
                errors: false,
                token: 'any string' //expect any string
            })
            .expect('jsonTypes', {
                success: Joi.boolean().required(),
                message: Joi.string().required(),
                errors: Joi.boolean().required()
            })
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    })
})