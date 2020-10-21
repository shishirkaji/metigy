import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import GoogleAdConfigurator from "./component/GoogleAdConfigurator";
import Landing from "./component/Landing";
import axios from "axios";
import NotFound from "./component/NotFound";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  GETKEYWORDS,
  GETSETTINGS,
  GETSITES,
  UPDATESETTINGS,
  ADDSETTINGS,
  ADDSITES,
  ADDKEYWORD,
  DELETEKEYWORDS,
  DELETESITES,
} from "./utility";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"],
    fontWeightRegular: "200",
    // fontSize : "25px"
  },
  palette: {
    background: {
      default: "#243851",
      // dark bg colour 253046
    },
    text: {
      primary: "#ffffff",
      secondary: "#00000",
    },
  },
});

const App = () => {
  const [state, setState] = useState({
    userID: 1,
    settings: null,
  });
  const [userID, setUserID] = useState(2);

  useEffect(() => {
    axios.defaults.baseURL = "http://192.168.43.161:5000/api/v1";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }, []);
  useEffect(() => {
    // make api call
    console.log("making api call to settings");
    axios({
      method: GETSETTINGS.method,
      url: GETSETTINGS.url,
      params: {
        ID: state.userID,
      },
    }).then((res) => {
      setState({ ...state, settings: res.data.settings });
    });
  }, [state.userID]);

  const setUser = (ID) => {
    setState({ ...state, userID: ID });
  };
  const onStart = (settings) => {
    console.log(settings);
    alert("Starting engine with settings");
    return null;
  };
  const onStop = () => {
    alert("Stoping engine");
    return null;
  };
  const onExport = (settings) => {
    console.log(settings);
    alert("Exporting engine");
    return null;
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GoogleAdConfigurator
          onStart={onStart}
          settings={state.settings}
          onStop={onStop}
          onExport={onExport}
        /> */}
        <AppBar position="sticky" style={{ flexGrow: 1 }}>
          <Toolbar>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left", marginRight: "5px" }}
              onClick={(e) => {
                setUser(1);
              }}
            >
              User 1
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left", marginRight: "5px" }}
              onClick={(e) => {
                setUser(2);
              }}
            >
              User 2
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left", marginRight: "5px" }}
              onClick={(e) => {
                setUser(3);
              }}
            >
              User 3
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left", marginRight: "5px" }}
              onClick={(e) => {
                setUser(4);
              }}
            >
              User 4
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <GoogleAdConfigurator
              onStart={onStart}
              settings={state.settings}
              onStop={onStop}
              onExport={onExport}
              // style ={{marginTop :"50px"}}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
