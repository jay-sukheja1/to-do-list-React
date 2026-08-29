import { updateLocalStorage } from "../utils/localStorageUtils.js";

export const taskReducer = (state, action) => {
  let updatedTasks;

  switch (action.type) {
    case "ADD":
      updatedTasks = [...state, action.payload];
      break;

    case "REMOVE":
      updatedTasks = state.filter((task) => task.id !== action.payload);
      break;

    case "UPDATE":
      updatedTasks = state.map((task) =>
        task.id === action.payload.taskId
          ? {
              ...task,
              text: action.payload.editText,
              priority: action.payload.editPriority,
            }
          : task,
      );
      break;

    case "TOGGLE_DONE":
      updatedTasks = state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      );
      break;

    case "SORT":
      updatedTasks = [...state].sort((a, b) => a.priority - b.priority);
      break;

    default:
      updatedTasks = state;
  }

  updateLocalStorage(updatedTasks);
  return updatedTasks;
};
