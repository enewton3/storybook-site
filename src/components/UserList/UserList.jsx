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
import React, { useState, useEffect } from "react";
import DeleteWarn from "../DeleteWarn/DeleteWarn";
import EditIcon from "@material-ui/icons/Edit";
import { deleteUser } from "../../services/users";
import UserCreate from "../UserDialog/UserCreate";

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

export default function UserList({
  users,
  setUsers,
  fetchUsers,
  // handleDeleteAllTables,
  handleEditUser,
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [warningOpen, setWarningOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  // useEffect(() => {
  //   fetchTables();
  // }, [fetchTables]);

  useEffect(() => {}, [users]);

  // const sortedTables = users.sort((a, b) => a.table_number - b.table_number);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.id);
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
    selected.forEach((id) => {
      let newUsers = users.filter((item) => item.id !== id);
      setUsers(newUsers);
      deleteUser(id);
    });
    setSelected([]);
  };

  return (
    <>
      <div className={classes.header}>
        <Typography className={classes.listhead} variant="h5">
          Users
        </Typography>
        <Tooltip title="Total Users">
          <Typography className={classes.counter}>{users.length}</Typography>
        </Tooltip>
        <div className={classes.actions}>
          {/* <Tooltip title="Export CSV File">
            <CSVLink className={classes.actionButtonLink} data={users}>
              <Button className={classes.actionButton} variant="outlined">
                Export CSV
              </Button>
            </CSVLink>
          </Tooltip> */}
          <Tooltip title="Refresh Users">
            <Button
              className={classes.actionButton}
              onClick={fetchUsers}
              variant="outlined"
            >
              Refresh
            </Button>
          </Tooltip>

          {selected.length > 0 ? (
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

          {selected.length === 1 ? (
            <Tooltip title="Edit Selected">
              <Button
                className={classes.actionButton}
                onClick={() => setEditOpen(true)}
                variant="outlined"
              >
                <EditIcon />
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
                  selected.length > 0 && selected.length < users.length
                }
                checked={users.length > 0 && selected.length === users.length}
              />
            </TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Guests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            const isItemSelected = isSelected(user.id);

            return (
              <TableRow
                key={user.id}
                hover
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    onClick={(e) => handleSelect(e, user.id)}
                    checked={isItemSelected}
                  />
                </TableCell>
                <TableCell align="center">
                  {user.firstname} {user.lastname}
                </TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
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
      <UserCreate
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelected([]);
        }}
        handleEditTable={handleEditUser}
        edit={users.filter((item) => item.id === selected[0])[0]}
      />
    </>
  );
}
