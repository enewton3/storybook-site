import api from "./apiconfig";
const localStorage = window.localStorage;

export const setLoggedIn = (guestName) => {
  const item = localStorage.setItem("guest102121", guestName);
  return item;
};

export const checkLoggedIn = () => {
  const item = localStorage.getItem("guest102121");
  return item;
};

export const createGuest = async (guestData) => {
  const response = await api.post("/storybook_guests", {
    seacoast_guest: guestData,
  });
  return response.data;
};

export const showGuests = async () => {
  const response = await api.get("/storybook_guests");
  return response.data;
};

export const deleteGuest = async (id) => {
  const response = await api.delete(`/storybook_guests/${id}`);
  return response.data;
};

export const deleteAllGuests = async () => {
  const response = await api.delete("/all_storybook_guests");
  return response.data;
};
