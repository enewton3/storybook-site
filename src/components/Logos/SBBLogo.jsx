import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logos/logo-sbb.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: "center",
    zIndex: "50",
    width: "40vw",
    "@media(max-width: 1024px)": {
      width: "50vw",
    },
    "@media(max-width: 900px)": {
      width: "60vw",
    },
    "@media(max-width: 800px)": {
      width: "70vw",
    },
    "@media(max-width: 700px)": {
      width: "80vw",
    },
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
