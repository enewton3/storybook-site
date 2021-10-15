import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logos/logo-sbb.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: "center",
    zIndex: "50",
    width: "50vw",
  },
}));
export default function SBBLogo({ width }) {
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
