import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    // display: "flex",
    // justifyContent: "space-around",
    // alignItems: "baseline",
    // width: "100%",
  },
  input: { width: "100%", marginTop: "1vh" },
}));

export default function UserCreate({
  onClose,
  open,
  handleCreateUser,
  handleEditUser,
  edit,
}) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (edit) {
      setFormData({
        username: edit.username,
        firstname: edit.firstname,
        lastname: edit.lastname,
      });
    } else {
      setFormData({
        username: "",
        firstname: "",
        lastname: "",
        password: "",
      });
    }
  }, [edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    edit
      ? await handleEditUser(formData, edit.id)
      : await handleCreateUser(formData);
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{edit ? <>Edit</> : <>Add</>} A User</DialogTitle>
      <DialogContent>
        <form className={classes.form}>
          <TextField
            className={classes.input}
            variant="filled"
            label="Username"
            name="username"
            helperText="Must be unique"
            value={formData.username}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
          {!edit ? (
            <TextField
              className={classes.input}
              variant="filled"
              label="Password"
              name="password"
              helperText="At least 6 characters"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
            />
          ) : null}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>
          {edit ? <>Edit</> : <>Create</>} User
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
