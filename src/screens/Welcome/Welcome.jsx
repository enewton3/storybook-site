import { makeStyles } from "@material-ui/core";
import React from "react";
import LoginForm from "../../components/LoginForm";
// import HeaderGraphic from "../../components/HeaderGraphic";
import backgroundimg from "../../assets/Background-Registration.png";
import SBBLogo from "../../components/Logos/SBBLogo";
import MGHLogo from "../../components/Logos/MGHLogo";
import SupportButton from "../../components/SupportButton";

const useStyles = makeStyles((theme) => ({
  welcome: {
    display: "flex",
    flexFlow: "column wrap",
    backgroundImage: `url(${backgroundimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0 auto",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
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
      <SBBLogo width="30vw" />
      <MGHLogo />
      <LoginForm
        currentGuest={currentGuest}
        setCurrentGuest={setCurrentGuest}
      />
      <SupportButton />
    </div>
  );
}
