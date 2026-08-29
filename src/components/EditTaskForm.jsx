import { Check, X } from "lucide-react";
import { useState } from "react";

const EditTaskForm = ({ task, setEditingTaskId, updateTask }) => {
  const [editText, setEditText] = useState(task.text);
  const [editPriority, setEditPriority] = useState(task.priority);

  const saveEdit = (e) => {
    e?.preventDefault?.();
    if (editText.trim()) {
      updateTask({
        taskId: task.id,
        editText: editText.trim(),
        editPriority: Math.max(1, editPriority),
      });
      setEditingTaskId(null);
    }
  };

  return (
    <li className="task-item task-item--editing">
      <form className="edit-task-form" onSubmit={saveEdit}>
        <div className="edit-inputs">
          <input
            type="text"
            className="input edit-text-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit task description"
            autoFocus
          />
          <div className="priority-input-wrapper">
            <label
              className="priority-label"
              htmlFor={`edit-priority-${task.id}`}
            >
              Priority
            </label>
            <input
              id={`edit-priority-${task.id}`}
              type="number"
              className="input edit-priority-input"
              value={editPriority}
              onChange={(e) => setEditPriority(Number(e.target.value))}
              min="1"
            />
          </div>
        </div>
        <div className="edit-actions">
          <button
            type="submit"
            className="btn btn--primary btn--save"
            title="Save changes"
            aria-label="Save changes"
          >
            <Check size={16} />
            <span>Save</span>
          </button>
          <button
            type="button"
            className="btn btn--secondary btn--cancel"
            onClick={() => setEditingTaskId(null)}
            title="Cancel editing"
            aria-label="Cancel editing"
          >
            <X size={16} />
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </li>
  );
};

export default EditTaskForm;
