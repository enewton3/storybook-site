import { Button, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import {
  getUsers,
  putUser,
  postUser,
  // getUser
} from "../../services/users";
import UserList from "../UserList/UserList";
import UserCreate from "./UserCreate";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
  },
}));

export default function UserDialog() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);

  const fetchUsers = async () => {
    const resp = await getUsers();
    setUsers(resp);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const retrieveUser = async (id) => {
  //   const resp = await getUser(id);
  //   return resp;
  // };

  const handleEditUser = async (id, payload) => {
    const resp = await putUser(id, payload);
    return resp;
  };

  const handleCreateUser = async (payload) => {
    const resp = await postUser(payload);
    setUsers((prev) => [...prev, resp.user]);
    return resp.user;
  };

  return (
    <div className={classes.container}>
      <div>
        <UserList
          users={users}
          setUsers={setUsers}
          fetchUsers={fetchUsers}
          handleEditUser={handleEditUser}
        />
      </div>
      <div>
        <Button onClick={() => setCreateOpen(true)}>Create User</Button>
      </div>
      <UserCreate
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        handleCreateUser={handleCreateUser}
      />
    </div>
  );
}
