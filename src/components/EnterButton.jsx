import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";

const CustomButton = withStyles((theme) => ({
  root: {
    // borderRadius: "0px",
    backgroundColor: "rgba(174, 49, 46)",
    color: "white",
    margin: "3vh auto",
    fontSize: "1rem",
    boxShadow: "2px 2px 5px black",
    fontFamily: "Libre Baskerville",
    padding: "1vh 2vw 1vh 2vw",
    border: "none",
    borderRadius: "50px 0px 50px 0px",
    cursor: "pointer",
    // borderRadius: "10px",
    letterSpacing: ".3rem",
    "&:hover": {
      // backgroundColor: theme.palette.primary.dark,
      color: "#FFF",
    },
  },
}))(Button);

export default function EnterButton({ type, sendit, children, color }) {
  return (
    <CustomButton type={type} onClick={sendit}>
      {children}
    </CustomButton>
  );
}
