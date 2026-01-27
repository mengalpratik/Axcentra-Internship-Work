import { useEffect, useState } from "react";
import API from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // Load tasks
  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // ✅ ADD TASK (THIS WAS MISSING)
  const addTask = async (taskData) => {
    await API.post("/tasks", taskData);
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // Update task
  const updateTask = async (id, data) => {
    await API.put(`/tasks/${id}`, data);
    fetchTasks();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>

      <div className="card">
        <TodoForm onAdd={addTask} />
      </div>

      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}
