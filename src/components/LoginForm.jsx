import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createGuest, setLoggedIn } from "../services/guests";
import EnterButton from "./EnterButton";

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    margin: "0 auto",
    backgroundColor: "rgba(242,215,128, .8)",
    padding: "3vh 0 1vh 0",
  },
  input: {
    color: "black",
    backgroundColor: "white",
    width: "80%",
    border: "none",
    fontSize: "1rem",
    padding: "2vh 1vw 2vh 1vw",
    margin: "1vh 0 1vh 0",
    fontFamily: "Libre Baskerville",
    letterSpacing: ".3rem",
    "&:hover": {
      backgroundColor: "rgba(255, 255,255, .5)",
    },
  },
}));

export default function LoginForm(props) {
  const [formData, setFormData] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const { setCurrentGuest } = props;

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
      setCurrentGuest(guest);
      history.push("/event");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={classes.loginform}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        className={classes.input}
        label="First Name"
        name="firstname"
        placeholder="FIRST NAME..."
        type="text"
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        className={classes.input}
        label="Last Name"
        name="lastname"
        type="text"
        placeholder="LAST NAME..."
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        className={classes.input}
        label="Email"
        name="email"
        type="email"
        placeholder="EMAIL..."
        onChange={(e) => handleChange(e)}
        required
      />
      <EnterButton sendit={handleSubmit} />
    </form>
  );
}