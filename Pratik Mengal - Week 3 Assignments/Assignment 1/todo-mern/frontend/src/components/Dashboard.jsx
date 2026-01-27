import { useEffect, useState } from "react";
import API from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const { data } = await API.get("/tasks");

    // 🧠 SORTING LOGIC (IMPORTANT)
    const pending = data.filter(t => !t.completed);
    const completed = data
      .filter(t => t.completed)
      .sort(
        (a, b) =>
          new Date(b.completedAt || 0) - new Date(a.completedAt || 0)
      );

    setTasks([...pending, ...completed]);
  };

  useEffect(() => {
    load();
  }, []);

  const addTask = async (task) => {
    await API.post("/tasks", task);
    load();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    load();
  };

  const updateTask = async (id, data) => {
    await API.put(`/tasks/${id}`, data);
    load();
  };

  return (
    <div className="app-container">
      <h2>Task Manager</h2>

      <TodoForm onAdd={addTask} />

      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}
