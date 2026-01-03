import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
  return (
    <>
      {tasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default TaskList;
