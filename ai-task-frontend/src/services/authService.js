import axios from "../api/axios";

const register = async (userData) => {
  const response = await axios.post(
    "/auth/register",
    userData
  );
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(
    "/auth/login",
    userData
  );
  return response.data;
};

export default {
  register,
  login,
};