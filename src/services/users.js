import api from "./apiconfig";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const postUser = async (userData) => {
  const response = await api.post("/users", { user: userData });
  return response.data;
};

export const putUser = async (id, userData) => {
  const response = await api.put(`/users/${id}`, { user: userData });
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
