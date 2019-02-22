const express = require('express')
const taskController = require('../controllers/task').taskController
const authController = require('../controllers/auth').authController
const userController = require('../controllers/user').userController
const dateController = require('../controllers/date').dateController
const numberController = require('../controllers/number').numberController
const checkAuth = require('../middleware/auth')
const router = express.Router()

//Authentication
router.post('/api/v1/auth/login', authController.login)

//Tasks
router.get('/api/v1/tasks/get', checkAuth, taskController.getAllTasks)
router.get('/api/v1/tasks/get/:id', checkAuth, taskController.getTask)
router.post('/api/v1/tasks/post', checkAuth, taskController.createTask)
router.put('/api/v1/tasks/put/:id', checkAuth, taskController.updateTask)
router.delete('/api/v1/tasks/delete/:id', checkAuth, taskController.deleteTask)
router.delete('/api/v1/tasks/deleteAll', checkAuth, taskController.deleteAllTasks)

//Users
router.get('/api/v1/users/getAllFirstnames', checkAuth, userController.getAllFirstnames)
router.get('/api/v1/users/getAllLastnames', checkAuth, userController.getAllLastnames)
router.get('/api/v1/users/getRandomFirstname', checkAuth, userController.getRandomFirstname)
router.get('/api/v1/users/getRandomLastname', checkAuth, userController.getRandomLastname)
router.get('/api/v1/users/getRandomName', checkAuth, userController.getRandomName)
router.get('/api/v1/users/getRandomGender', checkAuth, userController.getRandomGender)

//Dates
router.get('/api/v1/dates/getTodaysDate', checkAuth, dateController.getTodaysDate)

//Numbers
router.post('/api/v1/numbers/getRandomNumber', checkAuth, numberController.getRandomNumber)


module.exports = {
    router
}