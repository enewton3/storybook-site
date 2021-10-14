import {
  Button,
  Checkbox,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { deleteGuest } from "../../services/guests";
import { CSVLink } from "react-csv";
import DeleteWarn from "./DeleteWarn";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: "1vh",
  },
  listhead: {},
  actionButtonLink: { textDecoration: "none", color: "black" },
  actionButton: {
    height: "50%",
    margin: "0 1vw 0 1vw",
  },
  counter: {
    background: "black",
    padding: ".5vh 1vw .5vh 1vw",
    borderRadius: "10px",
    color: "white",
  },
  list: {
    padding: 0,
  },
  listItem: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    width: "100%",
    fontFamily: "Helvetica",
  },
  name: {},
  email: {
    justifySelf: "flex-end",
  },
}));

export default function GuestList({
  guests,
  setGuests,
  fetchGuestList,
  handleDeleteAll,
  admin,
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [warningOpen, setWarningOpen] = useState(false);
  const [sortedGuests, setSortedGuests] = useState([]);

  useEffect(() => {
    fetchGuestList();
  }, [fetchGuestList]);

  useEffect(() => {
    const sorted = guests.sort((a, b) => b.id - a.id);
    setSortedGuests(sorted);
  }, [guests]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = guests.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDelete = () => {
    if (selected.length === guests.length) {
      handleDeleteAll();
    } else {
      selected.forEach((id) => {
        deleteGuest(id);
        setGuests((prev) => prev.filter((item) => item.id !== id));
      });
    }
    setSelected([]);
  };

  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.listhead} variant="h5">
          Guests
        </Typography>
        <Tooltip title="Total Guests">
          <Typography className={classes.counter}>{guests.length}</Typography>
        </Tooltip>
        <div className={classes.actions}>
          <Tooltip title="Export CSV File">
            <CSVLink className={classes.actionButtonLink} data={guests}>
              <Button className={classes.actionButton} variant="outlined">
                Export CSV
              </Button>
            </CSVLink>
          </Tooltip>
          <Tooltip title="Refresh Guests">
            <Button
              className={classes.actionButton}
              onClick={fetchGuestList}
              variant="outlined"
            >
              Refresh
            </Button>
          </Tooltip>

          {selected.length > 0 && admin ? (
            <Tooltip title="Delete Selected">
              <Button
                className={classes.actionButton}
                onClick={() => setWarningOpen(true)}
                variant="outlined"
              >
                <DeleteIcon />
              </Button>
            </Tooltip>
          ) : null}
        </div>
      </div>
      <Divider />
      <Table stickyHeader className={classes.list} size="small">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                onClick={(e) => handleSelectAllClick(e)}
                indeterminate={
                  selected.length > 0 && selected.length < guests.length
                }
                checked={guests.length > 0 && selected.length === guests.length}
              />
            </TableCell>
            <TableCell align="center">Guest ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedGuests.map((guest) => {
            const isItemSelected = isSelected(guest.id);

            return (
              <TableRow
                key={guest.id}
                hover
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    onClick={(e) => handleSelect(e, guest.id)}
                    checked={isItemSelected}
                  />
                </TableCell>
                <TableCell align="center">{guest.id}</TableCell>
                <TableCell align="center">
                  {guest.firstname} {guest.lastname}
                </TableCell>
                <TableCell align="center">{guest.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <DeleteWarn
        open={warningOpen}
        onClose={() => setWarningOpen(false)}
        handleDelete={handleDelete}
      />
    </>
  );
}
