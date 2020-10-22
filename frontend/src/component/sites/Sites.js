import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { ADDSITES, DELETESITES } from "./../../utility";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const useStyles = makeStyles({
  button: {
    textTransform: "none",
    fontSize: "0.59rem",
    color: "white",
  },
});
const Sites = ({ classes, resetSite, sites, ID }) => {
  let [state, setState] = useState("");
  const style = useStyles();
  const changeHandler = (e) => {
    setState(e.target.value);
  };
  const addSite = (e) => {
    if (state.length === 0) {
      toast.error("Please type word and click add.")
      return null;
    } e.preventDefault();
    console.log("adding.... site");
    const data = {
      ID,
      site: state,
    };
    console.log(data);
    axios({
      method: ADDSITES.method,
      url: ADDSITES.url,
      data: data,
    })
      .then((res) => {
        console.log("herllo here is the response " + res);
        if (res.status === 200) {
          // clear the text area
          setState("");
          resetSite();
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err.status);
        console.log(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };
  const handleDelete = (item) => {

    console.log(item);
    axios({
      method: DELETESITES.method,
      url: DELETESITES.url,
      data: { ID, site: item },
    })
      .then((res) => {
        console.log("DELETE KEYWORD SUCCESS " + res);
        if (res.status === 200) {
          // clear the text area
          resetSite();
        } else if (res.status === 400) {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };
  const listItem = (item) => {
    return (
      <div
        key={item.site}
        style={{ paddingBottom: "10px", paddingTop: "10px" }}
      >
        {item.site}{" "}
        <Button
          startIcon={<RemoveCircleOutlineIcon />}
          className={style.button}
          variant="outlined"
          style={{ float: "right" }}
          onClick={() => handleDelete(item.site)}
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
        <h2> Sites </h2>
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
            value={state}
            onChange={(e) => changeHandler(e)}
          />
          <Button
            startIcon={<AddCircleOutlineIcon />}
            className={style.button}
            variant="contained"
            onClick={(e) => {
              addSite(e);
            }}
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
          {/* {dummyData.map((item) => { */}
          {sites.map((item) => {
            return listItem(item);
          })}
        </ul>
      </div>
    </Grid>
  );
};

export default Sites;
