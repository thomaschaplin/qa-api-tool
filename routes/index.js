const express = require('express')
const taskController = require('../controllers/task').taskController
const router = express.Router()


router.get('/api/v1/tasks/get', taskController.getAllTasks)
router.get('/api/v1/tasks/get/:id', taskController.getTask)
router.post('/api/v1/tasks/post', taskController.createTask)
router.put('/api/v1/tasks/put/:id', taskController.updateTask)
router.delete('/api/v1/tasks/delete/:id', taskController.deleteTask)
router.delete('/api/v1/tasks/deleteAll', taskController.deleteAllTasks)


module.exports = {
    router
}