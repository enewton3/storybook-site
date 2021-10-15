import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logos/logo-mgh.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: "center",
    zIndex: "50",
    width: "20vw",
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
