import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-task-manager-backend-9o7v.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;