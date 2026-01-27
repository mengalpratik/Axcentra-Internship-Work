import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // 🔹 GET
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("GET ERROR:", err);
    }
  };

  // 🔹 ADD + EDIT (POST / PUT)
  const handleSaveTask = async (task) => {
    try {
      if (editingTask) {
        const res = await updateTask(editingTask._id, task);
        setTasks(tasks.map(t =>
          t._id === res.data._id ? res.data : t
        ));
        setEditingTask(null);
      } else {
        const res = await createTask(task);
        setTasks([res.data, ...tasks]);
      }
    } catch (err) {
      console.error("SAVE ERROR:", err);
    }
  };

  // 🔹 COMPLETED TOGGLE (PUT)
  const handleToggle = async (id, completed) => {
    try {
      const res = await updateTask(id, { completed });
      setTasks(tasks.map(t =>
        t._id === id ? res.data : t
      ));
    } catch (err) {
      console.error("TOGGLE ERROR:", err);
    }
  };

  // 🔹 DELETE
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>Todo App</h1>

      <TaskForm
        onSave={handleSaveTask}
        editingTask={editingTask}
      />

      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
