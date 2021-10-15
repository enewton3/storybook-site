import React from "react";
import { Button, makeStyles, Typography, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: { textAlign: "center" },
  link: { textDecoration: "none" },
  secondLink: { color: "white", textDecoration: "none" },
  button: {
    backgroundColor: "rgb(11,34,88)",
    color: "white",
    // width: "15vw",
    // height: "6vh",
    padding: "1vh 1vw 1vh 1vw",
    fontFamily: "LaLuxe",
    "&:hover": {
      backgroundColor: "#2c2c2c",
    },
    fontSize: "1.2rem",
  },
  text: { fontFamily: "Libre Baskerville", paddingTop: "2vh" },
}));

const CustomButton = withStyles((theme) => ({
  root: {
    borderRadius: "0px",
  },
}))(Button);

export default function SupportButton() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
        Live tech support is standing by
        <br />
        <a
          href="mailto:vesupport@portlighting.com"
          target="_blank"
          rel="noreferrer"
          className={classes.secondLink}
        >
          vesupport@portlighting.com
        </a>
      </Typography>
      <a
        href="mailto:vesupport@portlighting.com"
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        <CustomButton className={classes.button}>Tech Support</CustomButton>
      </a>
    </div>
  );
}
