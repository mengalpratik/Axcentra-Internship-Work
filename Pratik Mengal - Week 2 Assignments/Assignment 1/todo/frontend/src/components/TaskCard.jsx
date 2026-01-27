const TaskCard = ({ task, onToggle, onEdit, onDelete }) => {
  return (
    <div className="task-card">
      {/* Main row */}
      <div className="task-row">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            onToggle(task._id, !task.completed)
          }
        />

        {/* Task name */}
        <span className={`task-title ${task.completed ? "done" : ""}`}>
          {task.title}
        </span>

        {/* Deadline exactly after name (middle) */}
        <span className="task-deadline">
          ⏳ {task.deadline}
        </span>

        {/* Actions at the very end */}
        <div className="task-actions">
          <button onClick={() => onEdit(task)}>✏️</button>
          <button onClick={() => onDelete(task._id)}>🗑️</button>
        </div>
      </div>

      {/* Hover info (stacked vertically) */}
      <div className="task-extra">
        <span className="task-created">
          Created on: {new Date(task.date).toLocaleDateString()}
        </span>

        <span className="task-desc">
          {task.description || "—"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
