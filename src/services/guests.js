import api from "./apiconfig";
const localStorage = window.localStorage;

export const setLoggedIn = (guestName) => {
  const item = localStorage.setItem("guest101921", guestName);
  return item;
};

export const checkLoggedIn = () => {
  const item = localStorage.getItem("guest101921");
  return item;
};

export const createGuest = async (guestData) => {
  const response = await api.post("/seacoast_guests", {
    seacoast_guest: guestData,
  });
  return response.data;
};

export const showGuests = async () => {
  const response = await api.get("/seacoast_guests");
  return response.data;
};

export const deleteGuest = async (id) => {
  const response = await api.delete(`/seacoast_guests/${id}`);
  return response.data;
};

export const deleteAllGuests = async () => {
  const response = await api.delete("/all_seacoast_guests");
  return response.data;
};
