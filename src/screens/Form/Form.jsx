import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setLoggedIn } from "../../services/guests";
import { createGuest } from "../../services/guests";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50%",
    margin: "3vh auto",
  },
  blurb: {
    fontFamily: "Helvetica",
    margin: "10vh 0 5vh 0 ",
  },
  input: { color: "white", background: "white", margin: "2vh 0 0 0" },
  button: {
    background: theme.palette.primary.main,
    color: "white",
    margin: "3vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "#FFF",
    },
  },
}));

export default function Form(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { setCurrentUser, currentUser } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createGuest(formData);
      const guest = JSON.stringify(response);
      setLoggedIn(guest);
      setCurrentUser(guest);
      history.push("/event");
    } catch (error) {
      console.error(error);
    }
  };

  if (currentUser) {
    history.push("/event");
  }

  return (
    <div className={classes.formContainer}>
      <Typography className={classes.blurb} variant="h5">
        Please enter your name and email
      </Typography>
      <form
        className={classes.loginform}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
        <Button type="submit" className={classes.button} variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}
