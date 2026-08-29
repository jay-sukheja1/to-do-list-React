import TaskItem from "./TaskItem.jsx";
import { useState } from "react";
import EditTaskForm from "./EditTaskForm.jsx";
import { CheckCircle2 } from "lucide-react";

const TaskList = ({
  tasks,
  showOnlyIncomplete,
  toggleTaskDone,
  removeTask,
  updateTask,
}) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const filteredTasks = tasks.filter(
    (task) => !showOnlyIncomplete || !task.done,
  );

  return (
    <div className="task-list-container">
      {filteredTasks.length === 0 ? (
        <div className="empty-state">
          <CheckCircle2 className="empty-state-icon" size={40} />
          <p className="empty-state-text">
            {tasks.length === 0
              ? "No tasks yet. Add one above to get started!"
              : "No incomplete tasks left. Great job!"}
          </p>
        </div>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) =>
            editingTaskId === task.id ? (
              <EditTaskForm
                key={task.id}
                task={task}
                setEditingTaskId={setEditingTaskId}
                updateTask={updateTask}
              />
            ) : (
              <TaskItem
                key={task.id}
                task={task}
                toggleTaskDone={toggleTaskDone}
                removeTask={removeTask}
                setEditingTaskId={setEditingTaskId}
              />
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
