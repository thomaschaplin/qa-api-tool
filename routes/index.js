const express = require('express')
const taskController = require('../controllers/task').taskController
const authController = require('../controllers/auth').authController
const checkAuth = require('../middleware/auth')
const router = express.Router()

//Tasks
router.get('/api/v1/tasks/get', checkAuth, taskController.getAllTasks)
router.get('/api/v1/tasks/get/:id', checkAuth, taskController.getTask)
router.post('/api/v1/tasks/post', checkAuth, taskController.createTask)
router.put('/api/v1/tasks/put/:id', checkAuth, taskController.updateTask)
router.delete('/api/v1/tasks/delete/:id', checkAuth, taskController.deleteTask)
router.delete('/api/v1/tasks/deleteAll', checkAuth, taskController.deleteAllTasks)

//Authentication
router.post('/api/v1/auth/login', authController.login)


module.exports = {
    router
}