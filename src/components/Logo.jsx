import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../assets/BGCBLogoBlue.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: "200px",
    alignSelf: "center",
    margin: "3vh 0 3vh 0",
    zIndex: "50",
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
