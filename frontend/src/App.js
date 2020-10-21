import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import GoogleAdConfigurator from "./component/GoogleAdConfigurator";
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
    keywords: null,
  });

  const settingsHandler = (changeType, newValue, name) => {
    let data = null;
    if (changeType === "add" || changeType === "sub") {
      console.log("adding");

      // make an api call to change the
      if (name === "waittarget1") {
        data = { ...state.settings, waittarget1: newValue };
      } else if (name === "waittarget2") {
        data = { ...state.settings, waittarget2: newValue };
      } else if (name === "pagestart") {
        data = { ...state.settings, pagestart: newValue };
      } else if (name === "pagestop") {
        data = { ...state.settings, pagestop: newValue };
      }
      console.log(data);
    } else if (changeType === "checkbox") {
      if (name === "incognito") {
        data = { ...state.settings, incognito: newValue };
      } else if (name === "visitpage") {
        data = { ...state.settings, visitpage: newValue };
      }
      console.log(data);
    } else if (changeType === null) {
    }
    axios({
      method: UPDATESETTINGS.method,
      url: UPDATESETTINGS.url,
      data,
    }).then((res) => {
      console.log(res.data);
      setState({ ...state, settings: data });
    });
  };
  useEffect(() => {
    axios.defaults.baseURL = "http://192.168.43.161:5000/api/v1";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }, []);

  useEffect(() => {
    // api call to get setting data
    console.log("making api call to get settings data");
    axios({
      method: GETSETTINGS.method,
      url: GETSETTINGS.url,
      params: {
        ID: state.userID,
      },
    }).then((res) => {
      console.log(res.data);
      let settingsData = res.data.settings;
      // api call to get all keywords by the user
      console.log("making get keywords api call");
      axios({
        method: GETKEYWORDS.method,
        url: GETKEYWORDS.url,
        params: {
          ID: state.userID,
        },
      }).then((res) => {
        console.log(res.data);
        setState({
          ...state,
          keywords: res.data.keywords,
          settings: settingsData,
        });
      });
    });
  }, [state.userID]);
  const resetKeyword = () => {
    // api call to reset all keywords by the user
    console.log("reseting keywords list by calling the api again");
    axios({
      method: GETKEYWORDS.method,
      url: GETKEYWORDS.url,
      params: {
        ID: state.userID,
      },
    }).then((res) => {
      console.log(res.data);
      setState({
        ...state,
        keywords: res.data.keywords,
      });
    });
  };
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
              resetKeyword={resetKeyword}
              keywords={state.keywords}
              onStart={onStart}
              settings={state.settings}
              onStop={onStop}
              onExport={onExport}
              settingsHandler={settingsHandler}
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
