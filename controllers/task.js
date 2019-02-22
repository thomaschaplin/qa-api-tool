const tasks = require('../db/tasks').tasks
const _ = require('lodash')
const uuidv4 = require('uuid/v4')

class TaskController {

    getAllTasks(req, res) {
        return res.status(200).json({
            success: true,
            message: 'Tasks retrieved successfully',
            errors: false,
            tasks: tasks
        })
    }

    getTask(req, res) {
        const id = req.body.id
        tasks.map((task) => {
            if (task.id === id) {
                return res.status(200).json({
                    success: true,
                    message: 'Task retrieved successfully',
                    errors: false,
                    task
                })
            }
            else {
                return res.status(404).json({
                    success: false,
                    message: 'Task does not exist',
                    errors: true
                })
            }
        })
    }

    createTask(req, res) {
        if (!req.body.title && !req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Title and Description is required',
                errors: true
            })
        }
        else if (!req.body.title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required',
                errors: true
            })
        }
        else if (!req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Description is required',
                errors: true
            })
        }
        else {
            const task = {
                id: uuidv4(),
                title: req.body.title,
                description: req.body.description,
                createdAt: new Date(),
                modifiedAt: null
            }
            tasks.push(task)
            return res.status(201).json({
                success: true,
                message: 'Task added successfully',
                errors: false,
                task
            })
        }
    }

    updateTask(req, res) {
        const id = req.body.id
        let taskFound
        let itemIndex
        tasks.map((task, index) => {
            if (task.id === id) {
                taskFound = task
                itemIndex = index
            }
        })
        if (!taskFound) {
            return res.status(404).json({
                success: false,
                message: 'Task not found',
                errors: true
            })
        }
        if (!req.body.title && !req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Title and Description is required',
                errors: true
            })
        }
        if (!req.body.title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required',
                errors: true
            })
        }
        else if (!req.body.description) {
            return res.status(400).json({
                success: false,
                message: 'Description is required',
                errors: true
            })
        }
        else {
            const updatedTask = {
                id: taskFound.id,
                title: req.body.title || taskFound.title,
                description: req.body.description || taskFound.description,
                createdAt: taskFound.createdAt,
                modifiedAt: new Date(),
            }
            tasks.splice(itemIndex, 1, updatedTask)
            return res.status(201).json({
                success: true,
                message: 'Task updated successfully',
                errors: false,
                updatedTask,
            })
        }
    }

    deleteTask(req, res) {
        const id = req.body.id
        tasks.map((task, index) => {
            if (task.id === id) {
                tasks.splice(index, 1)
                return res.status(200).json({
                    success: true,
                    message: 'Task deleted successfuly',
                    errors: false
                })
            }
            else {
                return res.status(404).json({
                    success: false,
                    message: 'Task not found',
                    errors: true
                })
            }
        })
    }

    deleteAllTasks(req, res) {
        if (tasks.length !== 0) {
            tasks.splice(0, tasks.length)
            return res.status(200).json({
                success: true,
                message: 'All tasks deleted successfuly',
                errors: false
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: 'No tasks not found',
                errors: true
            })
        }
    }
}

const taskController = new TaskController()

module.exports = {
    taskController
}