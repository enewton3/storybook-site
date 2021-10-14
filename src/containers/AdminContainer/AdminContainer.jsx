import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import AdminLogin from "../../screens/AdminLogin/AdminLogin";
import AdminPanel from "../../screens/AdminPanel/AdminPanel";
import { loginUser, removeToken, verifyUser } from "../../services/auth";
import {
  showGuests,
  createGuest,
  deleteAllGuests,
} from "../../services/guests";

export default function AdminContainer() {
  const [currentUser, setCurrentUser] = useState(null);
  const [guests, setGuests] = useState([]);
  const history = useHistory();

  const fetchGuestList = useCallback(async () => {
    const resp = await showGuests();
    setGuests(resp);
  }, []);

  const handleCreate = async (formData) => {
    const resp = await createGuest(formData);
    setGuests((prev) => [...prev, resp]);
    return resp;
  };

  const handleDeleteAll = async () => {
    const resp = await deleteAllGuests();
    setGuests([]);
    return resp;
  };

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/panel");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return currentUser ? (
    <AdminPanel
      handleLogout={handleLogout}
      fetchGuestList={fetchGuestList}
      guests={guests}
      setGuests={setGuests}
      handleCreate={handleCreate}
      handleDeleteAll={handleDeleteAll}
      currentUser={currentUser}
    />
  ) : (
    <AdminLogin handleLogin={handleLogin} />
  );
}
