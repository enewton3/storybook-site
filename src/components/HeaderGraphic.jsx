import { makeStyles } from "@material-ui/core";
import React from "react";
// import logo from "../assets/HousePartyLogo.png";
const logo = "";

const useStyles = makeStyles((theme) => ({
  logo: {
    // maxWidth: "500px",
    alignSelf: "center",
    margin: "3vh 0 3vh 0",
    zIndex: "50",
    width: "12vw",
    "@media (max-width: 1024px)": { width: "50vw" },
  },
}));

export default function Logo({ width }) {
  const classes = useStyles();
  return (
    <img
      className={classes.logo}
      width={width ? width : classes.logo.width}
      src={logo}
      alt="logo"
    />
  );
}
