import TaskControls from "./components/TaskControls.jsx";
import TaskList from "./components/TaskList.jsx";
import { useReducer, useState } from "react";
import TaskForm from "./components/TaskForm.jsx";
import { ListTodo } from "lucide-react";
import { getStoredTasks } from "./utils/localStorageUtils.js";
import { taskReducer } from "./reducers/taskReducer.js";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);
  const sortTasks = () => {
    dispatch({ type: "SORT" });
  };
  const addTask = (newTask) => {
    dispatch({ type: "ADD", payload: newTask });
  };
  const toggleTaskDone = (id) => {
    dispatch({ type: "TOGGLE_DONE", payload: id });
  };
  const removeTask = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const updateTask = ({ taskId, editText, editPriority }) => {
    dispatch({ type: "UPDATE", payload: { taskId, editText, editPriority } });
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div className="app-container">
      <div className="app-card">
        <header className="app-header">
          <div className="header-title-wrapper">
            <div className="header-icon-badge">
              <ListTodo size={26} />
            </div>
            <div>
              <h1 className="title">To-Do List</h1>
              <p className="subtitle">Stay organized and get things done</p>
            </div>
          </div>
          <div className="stats-badge">
            {completedCount} / {tasks.length} Completed
          </div>
        </header>
        <main className="app-main">
          <TaskForm addTask={addTask} />
          <TaskControls
            showOnlyIncomplete={showOnlyIncomplete}
            setShowOnlyIncomplete={setShowOnlyIncomplete}
            sortTasks={sortTasks}
          />
          <TaskList
            tasks={tasks}
            showOnlyIncomplete={showOnlyIncomplete}
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
