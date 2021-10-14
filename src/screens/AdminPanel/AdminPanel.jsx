import { Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import AdminNav from "../../components/AdminNav/AdminNav";
import GuestCreate from "../../components/GuestCreate/GuestCreate";
import GuestList from "../../components/GuestList/GuestList";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1vh 1vw 1vh 1vw",
  },
  logoutButton: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.contrastText,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
  },
  panelBody: {
    paddingTop: "9vh",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    "@media (max-width: 800px)": {
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "8vh",
    },
  },
  paper: {
    width: "45vw",
    padding: "2vh 2vw 2vh 2vw",
    maxHeight: "80vh",
    overflowY: "scroll",
    "@media (max-width: 800px)": {
      width: "80vw",
      marginTop: "2vh",
    },
  },
}));

export default function AdminPanel(props) {
  const {
    handleLogout,
    fetchGuestList,
    guests,
    setGuests,
    handleCreate,
    handleDeleteAll,
    currentUser,
  } = props;
  const classes = useStyles();

  const [createOpen, setCreateOpen] = useState(false);

  const firstname = currentUser?.firstname.toLowerCase();

  const admin =
    firstname === "evyn" || firstname === "kyle" || firstname === "steve";

  return (
    <div>
      <AdminNav handleLogout={handleLogout} currentUser={currentUser} />

      <div className={classes.panelBody}>
        <Paper className={classes.paper}>
          <VimeoFrame />
        </Paper>
        <Paper className={classes.paper}>
          <GuestList
            fetchGuestList={fetchGuestList}
            guests={guests}
            setGuests={setGuests}
            handleDeleteAll={handleDeleteAll}
            admin={admin}
          />
        </Paper>
        {admin ? (
          <Button
            onClick={() => {
              setCreateOpen(true);
            }}
            variant="outlined"
          >
            Create A New Guest
          </Button>
        ) : null}
        <GuestCreate
          onClose={() => {
            setCreateOpen(false);
          }}
          open={createOpen}
          handleCreate={handleCreate}
        />
      </div>
    </div>
  );
}
