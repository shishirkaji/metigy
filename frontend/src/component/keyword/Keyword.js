import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import { ADDKEYWORD, DELETEKEYWORDS } from "./../../utility";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles({
  button: {
    textTransform: "none",
    color: "white",
    fontSize: "0.59rem",
  },
});

const Keyword = ({ classes, keywords, resetKeyword, ID }) => {
  let [state, setState] = useState("");
  const style = useStyles();
  const changeHandler = (e) => {
    setState(e.target.value);
  };
  const deleteItem=(keyword)=>{
    let data = {
      ID,
      keyword:keyword
    }
    
    axios({
      method: DELETEKEYWORDS.method,
      url: DELETEKEYWORDS.url,
      data :{ID , keyword}
    })
      .then((res) => {
        if (res.status === 200) {
          // clear the text area
          resetKeyword();
        } else if (res.status === 400) {
        }
      })
      .catch((err) => {
        toast.error(err.response.data.msg)
      });
  }
  const addHandler = (e) => {
    // make api call to add the keyword
    e.preventDefault();
    const data = {
      ID,
      keyword: state,
    };
    axios({
      method: ADDKEYWORD.method,
      url: ADDKEYWORD.url,
      data: data,
    })
      .then((res) => {
        if (res.status === 200) {
          // clear the text area
          setState("");
          resetKeyword();
        } 
      })
      .catch((err) => {
        toast.error(err.response.data.msg)
      });
  };
  const listItem = (item) => {
    return (
      <div
        key={item.keyword}
        style={{ paddingBottom: "10px", paddingTop: "10px" }}
      >
        {item.keyword}{" "}
        <Button

          startIcon={<RemoveCircleOutlineIcon />}
          className={style.button}
          variant="outlined"
          style={{ float: "right" }}
          onClick = {()=>{deleteItem(item.keyword)}}
        >
          Clear
        </Button>
      </div>
    );
  };
  return (
    <Grid item xs={12} md={6} lg={3}>
      <ToastContainer />
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
            name="keywordText"
            value={state}
            onChange={(e) => changeHandler(e)}
            style={{ height: "37px", border: "none", width: "60%" }}
            placeholder="   Enter your site here"
          />
          <Button
            startIcon={<AddCircleOutlineIcon />}
            className={style.button}
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            onClick={(e) => {
              addHandler(e);
            }}
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
          {keywords.map((item) => {
            return listItem(item);
          })}
        </ul>
      </div>
    </Grid>
  );
};

export default Keyword;
