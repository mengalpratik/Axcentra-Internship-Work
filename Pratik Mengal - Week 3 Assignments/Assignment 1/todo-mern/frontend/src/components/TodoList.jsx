import { useState } from "react";

export default function TodoList({ tasks, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (task) => {
    setEditId(task._id);
    setEditData({
      title: task.title,
      deadline: task.deadline ? task.deadline.slice(0, 10) : "",
      description: task.description || ""
    });
  };

  const saveEdit = (id) => {
    onUpdate(id, editData);
    setEditId(null);
  };

  return (
    <>
      {tasks.map((task) => {
        const editing = editId === task._id;

        return (
          <div
            key={task._id}
            className={`task-card ${task.completed ? "completed" : ""}`}
          >
            {/* ================= ROW ================= */}
            <div className="task-row">
              {/* CHECKBOX COLUMN */}
              <div className="task-check">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) =>
                    onUpdate(task._id, { completed: e.target.checked })
                  }
                />

                {task.completedAt && (
                  <span className="completed-date">
                    {new Date(task.completedAt).toLocaleDateString()}
                  </span>
                )}
              </div>

              {/* TEXT COLUMN */}
              <div className="task-main">
                {editing ? (
                  <input
                    className="task-title-input"
                    value={editData.title}
                    onChange={(e) =>
                      setEditData({ ...editData, title: e.target.value })
                    }
                  />
                ) : (
                  <div className="task-title">{task.title}</div>
                )}

                {task.deadline && (
                  <div className="task-deadline">
                    Due: {new Date(task.deadline).toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* ACTIONS */}
              <div className="task-actions">
                <button
                  onClick={() =>
                    editing ? saveEdit(task._id) : startEdit(task)
                  }
                >
                  {editing ? "Save" : "Edit"}
                </button>
                <button
                  className="danger"
                  onClick={() => onDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>

            {/* ================= HOVER EXPAND ================= */}
            <div className="task-expand">
              {editing ? (
                <textarea
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      description: e.target.value
                    })
                  }
                />
              ) : (
                <>
                  {task.description && (
                    <p className="task-desc">{task.description}</p>
                  )}

                  <p className="task-meta">
                    Created: {new Date(task.createdAt).toLocaleString()} | Updated:{" "}
                    {new Date(task.updatedAt).toLocaleString()}
                  </p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
