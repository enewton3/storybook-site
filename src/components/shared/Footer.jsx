import { makeStyles } from "@material-ui/core";
import React from "react";
import flowers from "../../assets/FooterFlowers.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    // marginTop: "8vh",
    backgroundImage: `url(${flowers})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: "-500",
    height: "30vh",
    width: "100vw",
    position: "fixed",
    bottom: "0",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {/* <img src={footerLogo} alt="bgcb footer logo" /> */}
    </footer>
  );
}
