import { Pencil, Trash2 } from "lucide-react";

const TaskItem = ({ task, toggleTaskDone, removeTask, setEditingTaskId }) => {
  const getPriorityClass = (priority) => {
    if (priority === 1) return "priority-1";
    if (priority === 2) return "priority-2";
    if (priority === 3) return "priority-3";
    return "priority-default";
  };

  return (
    <li className={`task-item ${task.done ? "task-item--completed" : ""}`}>
      <div className="task-item-left">
        <label className="custom-checkbox-label">
          <input
            type="checkbox"
            className="custom-checkbox-input"
            checked={task.done}
            onChange={() => toggleTaskDone(task.id)}
            aria-label={`Mark "${task.text}" as ${task.done ? "incomplete" : "complete"}`}
          />
          <span className="checkbox-custom"></span>
        </label>
        <div className="task-details">
          <span className={`task-text ${task.done ? "task-text--done" : ""}`}>
            {task.text}
          </span>
          <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="btn btn--icon btn--edit"
          onClick={() => setEditingTaskId(task.id)}
          title="Edit task"
          aria-label={`Edit task "${task.text}"`}
        >
          <Pencil size={16} />
        </button>
        <button
          className="btn btn--icon btn--delete"
          onClick={() => removeTask(task.id)}
          title="Delete task"
          aria-label={`Delete task "${task.text}"`}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
