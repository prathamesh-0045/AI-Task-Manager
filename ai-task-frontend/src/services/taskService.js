import api from "../api/axios";

// Get All Tasks
const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

// Create Task
const createTask = async (task) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

// Update Task
const updateTask = async (id, task) => {
  const res = await api.put(`/tasks/${id}`, task);
  return res.data;
};

// Delete Task
const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};

// Generate AI Task
const generateAITask = async (prompt) => {
  const res = await api.post("/ai/generate", {
    prompt,
  });

  return res.data;
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  generateAITask,
};