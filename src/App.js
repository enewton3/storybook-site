import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import theme from "./styles/muiTheme";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { UserContext } from "./context/UserContext";
import Welcome from "./screens/Welcome/Welcome";
import Event from "./screens/Event/Event";
import Layout from "./components/shared/Layout";
import { checkLoggedIn } from "./services/guests";
import AdminContainer from "./containers/AdminContainer/AdminContainer";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "rgb(236,197,83)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    width: "100vw",
    height: "100vh",
    minHeight: "100vh",
  },
  everything: {
    overflow: "scroll",
    width: "100%",
    height: "100%",
  },
}));

function App() {
  const [currentGuest, setCurrentGuest] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const guest = checkLoggedIn();
    setCurrentGuest(guest);
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.everything}>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={currentGuest}>
            <Layout>
              <Switch>
                <Route path="/panel">
                  <AdminContainer />
                </Route>
                <Route path="/event">
                  <Event currentGuest={currentGuest} />
                </Route>
                <Route exact path="/">
                  <Welcome
                    currentGuest={currentGuest}
                    setCurrentGuest={setCurrentGuest}
                  />
                </Route>
              </Switch>
            </Layout>
          </UserContext.Provider>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
