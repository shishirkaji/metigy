import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Keyword from "./keyword/Keyword";
import Settings from "./settings/Settings";
import Sites from "./sites/Sites";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "12px",
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));
const GoogleAdConfigurator = ({ settings, onStart, onStop, onExport }) => {
 
  const show = () => {
    return (
      <Grid container spacing={3} style={{ padding: "7px" }}>
        <Keyword classes={classes} />
        <Sites classes={classes} />
        <Settings classes={classes} onStart={onStart} onStop={onStop} onExport={onExport} settings={settings} />
      </Grid>
    );
  };
  const classes = useStyles();
  return settings === null ? <div>Loading..</div> : show();
};

export default GoogleAdConfigurator;
