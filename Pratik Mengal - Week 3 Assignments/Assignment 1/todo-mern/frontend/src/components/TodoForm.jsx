import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const autoGrow = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, deadline, description });
    setTitle("");
    setDeadline("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="card">
      <input
        placeholder="Task name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <textarea
        placeholder="Steps / Description"
        value={description}
        rows={1}
        onInput={autoGrow}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          resize: "none",
          overflow: "hidden"
        }}
      />

      <button>Add Task</button>
    </form>
  );
}
