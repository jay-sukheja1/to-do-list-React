import { Plus } from "lucide-react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState(1);

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    if (newTask.trim()) {
      addTask({
        id: Date.now(),
        text: newTask.trim(),
        priority: newPriority,
        done: false,
      });
      setNewTask("");
      setNewPriority(1);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group task-input-group">
        <input
          type="text"
          className="input task-input"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="form-group priority-input-group">
        <label className="priority-input-label" htmlFor="task-priority">
          Priority
        </label>
        <input
          id="task-priority"
          type="number"
          className="input priority-input"
          value={newPriority}
          onChange={(e) => setNewPriority(Math.max(1, Number(e.target.value)))}
          min="1"
        />
      </div>
      <button
        type="submit"
        className="btn btn--primary add-task-btn"
        title="Add Task"
        aria-label="Add Task"
      >
        <Plus size={18} />
        <span>Add</span>
      </button>
    </form>
  );
};

export default TaskForm;
