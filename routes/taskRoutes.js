const express = require('express');
const {
  addTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// Add a new task (POST)
router.post('/', addTask);

// Get all tasks (GET)
router.get('/', getAllTasks);

// Get a task by ID (GET)
router.get('/:id', getTaskById);

// Update a task by ID (PUT)
router.put('/:id', updateTask);

// Delete a task by ID (DELETE)
router.delete('/:id', deleteTask);

module.exports = router;
