import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/LoginForm";
// import HeaderGraphic from "../../components/HeaderGraphic";
// import backgroundimg from "../../assets/eventbackground.jpg";
// import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    // flexFlow: "column wrap",
    // backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0 auto",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    alignItems: "center",
  },
  blurb: {
    margin: "10vh 0 10vh 0 ",
    fontFamily: "Helvetica",
  },
}));

export default function Welcome({ currentGuest, setCurrentGuest }) {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      {/* <HeaderGraphic /> */}
      <LoginForm
        currentGuest={currentGuest}
        setCurrentGuest={setCurrentGuest}
      />
      {/* <Logo /> */}
    </div>
  );
}
