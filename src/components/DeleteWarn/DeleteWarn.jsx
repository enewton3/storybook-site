import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

export default function DeleteWarn({ onClose, open, handleDelete }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action will delete all of the selected guests from the database.
          Are you sure you wish to proceed?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleDelete();
            onClose();
          }}
        >
          Yes, delete selected
        </Button>
        <Button variant="outlined" onClick={onClose} autoFocus>
          Nevermind
        </Button>
      </DialogActions>
    </Dialog>
  );
}
