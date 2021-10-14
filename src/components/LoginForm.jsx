import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createGuest, setLoggedIn } from "../services/guests";

const useStyles = makeStyles((theme) => ({
  loginform: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    margin: "0 auto",
    border: "3px solid white",
    backgroundColor: "rgba(6,34,42, .2)",
    padding: "3vh 0 1vh 0",
  },
  input: {
    color: "white",
    backgroundColor: "rgba(6, 34, 42, .7)",
    width: "80%",
    border: "none",
    fontSize: "1rem",
    padding: "2vh 1vw 2vh 1vw",
    margin: "1vh 0 1vh 0",
    fontFamily: "Libre Baskerville",
    letterSpacing: ".3rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  button: {
    backgroundColor: "rgba(6, 34, 42, .8)",
    color: "white",
    margin: "3vh auto",
    fontSize: "1.2rem",
    boxShadow: "2px 2px 5px black",
    fontFamily: "Libre Baskerville",
    padding: "2vh 3vw 2vh 3vw",
    border: "none",
    cursor: "pointer",
    borderRadius: "10px",
    letterSpacing: ".3rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "#FFF",
    },
  },
}));

// const CustomInput = withStyles({
//   root: {
//     color: "white",
//   },
//   input: { color: "white" },
// })(TextField);

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
        // variant="filled"
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
      <button className={classes.button} variant="outlined" type="submit">
        ENTER
      </button>
    </form>
  );
}
