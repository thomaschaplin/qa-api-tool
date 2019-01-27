const db = require('../db/db').tasks
const _ = require('lodash')
const uuidv4 = require('uuid/v4')

class TaskController {

    getAllTasks(req, res) {
        return res.status(200).send({
            success: true,
            message: 'Tasks retrieved successfully',
            errors: false,
            tasks: db
        })
    }

    getTask(req, res) {
        const id = req.params.id
        db.map((task) => {
            if (task.id === id) {
                return res.status(200).send({
                    success: true,
                    message: 'Task retrieved successfully',
                    errors: false,
                    task
                })
            }
        })
        return res.status(404).send({
            success: false,
            message: 'Task does not exist',
            errors: true
        })
    }

    createTask(req, res) {
        if (!req.body.title && !req.body.description) {
            return res.status(400).send({
                success: false,
                message: 'Title and Description is required',
                errors: true
            })
        }
        else if (!req.body.title) {
            return res.status(400).send({
                success: false,
                message: 'Title is required',
                errors: true
            })
        }
        else if (!req.body.description) {
            return res.status(400).send({
                success: false,
                message: 'Description is required',
                errors: true
            })
        }
        const task = {
            id: uuidv4(),
            title: req.body.title,
            description: req.body.description,
            createdAt: new Date(),
            modifiedAt: null
        }
        db.push(task)
        return res.status(201).send({
            success: true,
            message: 'Task added successfully',
            errors: false,
            task
        })
    }

    updateTask(req, res) {
        const id = req.params.id
        let taskFound
        let itemIndex
        db.map((task, index) => {
            if (task.id === id) {
                taskFound = task
                itemIndex = index
            }
        })
        if (!taskFound) {
            return res.status(404).send({
                success: false,
                message: 'Task not found',
                errors: true
            })
        }
        if (!req.body.title && !req.body.description) {
            return res.status(400).send({
                success: false,
                message: 'Title and Description is required',
                errors: true
            })
        }
        if (!req.body.title) {
            return res.status(400).send({
                success: false,
                message: 'Title is required',
                errors: true
            })
        }
        else if (!req.body.description) {
            return res.status(400).send({
                success: false,
                message: 'Description is required',
                errors: true
            })
        }
        const updatedTask = {
            id: taskFound.id,
            title: req.body.title || taskFound.title,
            description: req.body.description || taskFound.description,
            createdAt: taskFound.createdAt,
            modifiedAt: new Date(),
        }
        db.splice(itemIndex, 1, updatedTask)
        return res.status(201).send({
            success: true,
            message: 'Task updated successfully',
            errors: false,
            updatedTask,
        })
    }

    deleteTask(req, res) {
        const id = parseInt(req.params.id, 10)
        db.map((task, index) => {
            if (task.id === id) {
                db.splice(index, 1)
                return res.status(200).send({
                    success: true,
                    message: 'Task deleted successfuly',
                    errors: false
                })
            }
        })
        return res.status(404).send({
            success: false,
            message: 'Task not found',
            errors: true
        })
    }

    deleteAllTasks(req, res) {
        if (db.length !== 0) {
            db.splice(0, db.length)
            return res.status(200).send({
                success: true,
                message: 'All tasks deleted successfuly',
                errors: false
            })
        }
        return res.status(404).send({
            success: false,
            message: 'No tasks not found',
            errors: true
        })
    }
}

const taskController = new TaskController()

module.exports = {
    taskController
}