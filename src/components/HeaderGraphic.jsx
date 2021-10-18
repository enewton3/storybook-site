import { makeStyles } from "@material-ui/core";
import React from "react";
import backgroundimg from "../assets/text-ribbon.png";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${backgroundimg})`,
    display: "flex",
    width: "100%",
    height: "100%",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.8rem",
    "@media(max-width: 500px)": {
      fontSize: "1rem",
    },
    fontStyle: "italic",
  },
}));

export default function Logo({ width }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Text 'Storybook' to 617-582-2098 to donate
    </div>
  );
}
