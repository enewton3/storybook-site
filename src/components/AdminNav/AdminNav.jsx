import { AppBar, Button, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupWrapper from "../PopupWrapper/PopupWrapper";
import UserDialog from "../UserDialog/UserDialog";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
    backgroundColor: red[600],
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoutButton: {
    color: "white",
    backgroundColor: theme.palette.secondary.light,
    borderColor: "white",
  },
  welcome: { color: "white" },
}));

export default function AdminNav({ handleLogout, currentUser }) {
  const classes = useStyles();
  const [chatOpen, setChatOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <AppBar className={classes.appbar}>
        <Link to="/" className={classes.link}>
          <Button className={classes.link}>
            <Typography>Seacoast Capital</Typography>
          </Button>
        </Link>
        {currentUser.firstname.toLowerCase() === "evyn" ? (
          <Typography className={classes.welcome}>
            Hi{" "}
            <Button
              onClick={(e) => {
                setChatOpen((prev) => !prev);
                setAnchorEl(e.currentTarget);
              }}
            >
              {currentUser.firstname}
            </Button>
            !
          </Typography>
        ) : null}
        <Button
          className={classes.logoutButton}
          variant="outlined"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </AppBar>
      <PopupWrapper chatOpen={chatOpen} anchorEl={anchorEl}>
        <UserDialog />
      </PopupWrapper>
    </>
  );
}
