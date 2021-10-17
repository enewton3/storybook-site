import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logos/logo-mgh.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    alignSelf: "center",
    zIndex: "50",
    width: "15vw",
    "@media(max-width: 1024px)": {
      width: "25vw",
    },
    "@media(max-width: 900px)": {
      width: "35vw",
    },
    "@media(max-width: 800px)": {
      width: "45vw",
    },
    "@media(max-width: 700px)": {
      width: "55vw",
    },
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
