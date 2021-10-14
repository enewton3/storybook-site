import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  input: {},
}));

export default function GuestCreate({ onClose, open, handleCreate }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add A Guest</DialogTitle>
      <DialogContent>
        <form>
          <TextField
            className={classes.input}
            variant="filled"
            label="First Name"
            name="firstname"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Last Name"
            name="lastname"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            className={classes.input}
            variant="filled"
            label="Email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
            required
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleCreate(formData);
            onClose();
          }}
        >
          Create Guest
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
