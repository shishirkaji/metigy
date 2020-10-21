import { Grid } from "@material-ui/core";
import React from "react";
import { Button } from "@material-ui/core";
let backgroundAttachment =
  "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Logo.max-1500x1500.png";
const style = {
  // background: `url(${backgroundAttachment})`,
  backgroundAttachment: "fixed",
  backgroundSize: "24%",
  height: "700px",
  position: "initial",
  backgroundAttachment: "fixed",
  padding: "80px",
};

const Landing = ({ userID, setUser }) => {
  const clickHandler = (number) => {
    if (number === userID) return alert("hello");
    setUser(number);
  };
  return (
    <div style={style}>
      <Grid container spacing={3} style={{ padding: "7px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              clickHandler(1);
            }}
          >
            User 1
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              clickHandler(2);
            }}
          >
            User 2
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              clickHandler(3);
            }}
          >
            User 3
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            color="primary"
            variant="contained"
            onClick={(e) => {
              clickHandler(4);
            }}
          >
            User 4
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
