import { Link } from "react-router-dom";
import { AppBar, makeStyles, MenuItem } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexFlow: "row wrap",
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Link to="/">
        <MenuItem>Home</MenuItem>
      </Link>
    </AppBar>
  );
}
