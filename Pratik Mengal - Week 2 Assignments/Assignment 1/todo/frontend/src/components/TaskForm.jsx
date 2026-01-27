import { useEffect, useState } from "react";

const TaskForm = ({ onSave, editingTask }) => {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: today,        // 👈 default today
    deadline: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description || "",
        date: editingTask.date || today,
        deadline: editingTask.deadline || "",
      });
    }
  }, [editingTask, today]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      title: "",
      description: "",
      date: today,
      deadline: "",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Task"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Task description"
        value={form.description}
        onChange={handleChange}
      />

      {/* date hidden / readonly */}
      <input type="hidden" name="date" value={form.date} />

      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
