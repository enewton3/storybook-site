import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import backgroundimg from "../../assets/Background-Stream.png";
import SupportButton from "../../components/SupportButton";
import HeaderGraphic from "../../components/HeaderGraphic";
import SBBLogo from "../../components/Logos/SBBLogo";
import MGHLogo from "../../components/Logos/MGHLogo";
import EnterButton from "../../components/EnterButton";

const useStyles = makeStyles((theme) => ({
  event: {
    backgroundImage: `url(${backgroundimg})`,
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: "10vh",
    height: "100%",
    // width: "100vw",
  },
  logos: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1vh",
  },
  header: {
    width: "50vw",
    minHeight: "6.9vh",
  },
  vimeoframe: {
    width: "50vw",
  },
  chatframe: {
    width: "30%",
    height: "70vh",
  },
  actionButtons: {
    display: "flex",
    flexFlow: "row wrap",
    width: "50vw",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));

export default function Event({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();

  if (!currentGuest) {
    history.push("/");
  }

  return (
    <div className={classes.event}>
      <div className={classes.logos}>
        <SBBLogo />
        <MGHLogo />
      </div>
      <div className={classes.header}>
        <HeaderGraphic />
      </div>
      <div className={classes.vimeoframe}>
        <VimeoFrame />
      </div>
      <div className={classes.actionButtons}>
        <EnterButton color={"red"}>Donate</EnterButton>
        <SupportButton />
        <EnterButton color={"yellow"}>Celebrate</EnterButton>
      </div>
    </div>
  );
}
