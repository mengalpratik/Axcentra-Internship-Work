const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all tasks for user
router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Add task
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description, user: req.user.id });
  await task.save();
  res.status(201).json(task);
});

// Update task
router.put('/:id', auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete task
router.delete('/:id', auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Task deleted' });
});

module.exports = router;