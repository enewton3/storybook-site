import { Button, makeStyles, TextField } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    margin: "0 auto",
  },
  input: {
    color: "white",
    background: "white",
  },
  button: {
    background: orange[500],
    color: "white",
    margin: "2vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    "&:hover": {
      backgroundColor: orange[400],
      color: "#FFF",
    },
  },
}));

export default function AdminLogin({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <form className={classes.loginform} onSubmit={handleSubmit}>
      <TextField
        className={classes.input}
        variant="filled"
        label="Username"
        name="username"
        type="text"
        onChange={(e) => handleChange(e)}
        required
      />
      <TextField
        className={classes.input}
        variant="filled"
        label="Password"
        name="password"
        type="password"
        onChange={(e) => handleChange(e)}
        required
      />
      <Button className={classes.button} type="submit">
        Submit
      </Button>
    </form>
  );
}
