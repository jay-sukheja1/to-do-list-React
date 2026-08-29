import { ArrowDownWideNarrow } from "lucide-react";

const TaskControls = ({
  showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks,
}) => {
  return (
    <div className="task-controls">
      <label className="control-filter-toggle">
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
        />
        <span className="toggle-switch"></span>
        <span className="toggle-label">Show only incomplete</span>
      </label>
      <button
        className="btn btn--secondary sort-btn"
        onClick={sortTasks}
        title="Sort tasks by priority"
        aria-label="Sort tasks by priority"
      >
        <ArrowDownWideNarrow size={18} />
        <span>Sort by Priority</span>
      </button>
    </div>
  );
};

export default TaskControls;
