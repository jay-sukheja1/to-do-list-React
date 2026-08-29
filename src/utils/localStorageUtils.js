export const getStoredTasks = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

export const updateLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
