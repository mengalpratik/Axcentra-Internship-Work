const Task = require("../models/Task");

/* ================= CREATE TASK ================= */
exports.createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({
      title,
      description,
      deadline,
      user: req.user._id
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= GET TASKS ================= */
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({
    createdAt: -1
  });
  res.json(tasks);
};

/* ================= UPDATE TASK ================= */
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.title !== undefined) task.title = req.body.title;
    if (req.body.description !== undefined)
      task.description = req.body.description;
    if (req.body.deadline !== undefined)
      task.deadline = req.body.deadline;

    if (req.body.completed !== undefined) {
      task.completed = req.body.completed;
      task.completedAt = req.body.completed ? new Date() : null;
    }

    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= DELETE TASK ================= */
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
