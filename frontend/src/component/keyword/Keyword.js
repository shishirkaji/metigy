import React from "react";
import Grid from "@material-ui/core/Grid";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const dummyData = [
  "shoes",
  "shoes rack",
  "shoes store",
  "nike fashion",
  "anaconda",
  "hero",
  "test",
];
const useStyles = makeStyles({
  button: {
    textTransform: "none",
    color: "white",
    fontSize:"0.59rem"
  },
});
const Keyword = ({ classes }) => {
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
        <LabelOutlinedIcon style={{ color: "#2196f3" }} fontSize="large" />{" "}
        <h2> Keywords</h2>
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
            color="primary"
            style={{ float: "right" }}
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

export default Keyword;
