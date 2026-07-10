import api from "../api/axios";
const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

const createTask = async (task) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

const updateTask = async (id, task) => {
  const res = await api.put(`/tasks/${id}`, task);
  return res.data;
};

const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};