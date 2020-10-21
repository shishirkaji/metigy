import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
const dummyData = [
  "www.games-workshop.com",
  "www.pacourts.us",
  "www.pensketruckrental.com",
  "www.nike-fashion.com",
  "www.anaconda.com",
  "www.hero.com",
  "www.test.com",
];

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    fontSize:"0.59rem",
    color: "white",
  },
});
const Sites = ({ classes }) => {
  const style = useStyles();

  const listItem = (item) => {
    return (
      <div key={item} style={{ paddingBottom: "10px", paddingTop: "10px" }}>
        {item}{" "}
        <Button
          startIcon={<RemoveCircleOutlineIcon />}
          className={style.button}
          variant="outlined"
          style={{ float: "right" }}
        >
          Clear
        </Button>
      </div>
    );
  };
  return (
    <Grid item xs={12} md={6} lg={3}>
       <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
       <DesktopWindowsIcon style={{ color: "#00e676" }} fontSize="large" />
        <h2>{" "} Sites </h2>
      </div>
      
      <div
        className={classes.paper}
        style={{ backgroundColor: "#253046", height: "77px" }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            padding: "4px",
            width: "98%",
          }}
        >
          <input
            type="text"
            style={{ height: "37px", border: "none", width: "60%" }}
            placeholder="   Enter your site here"
          />
          <Button
            startIcon={<AddCircleOutlineIcon />}
            className={style.button}
            variant="contained"
            style={{ float: "right", backgroundColor: "#008041" }}
          >
            Add
          </Button>{" "}
        </div>
      </div>
      <div
        className={classes.paper}
        style={{ backgroundColor: "#253046", marginTop: "4px" }}
      >
        {" "}
        <ul>
          {dummyData.map((item) => {
            return listItem(item);
          })}
        </ul>
      </div>
    </Grid>
  );
};

export default Sites;
