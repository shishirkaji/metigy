import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
const style = {
  checkbox: {
    border: "thin solid #243851",
    paddingLeft: "5px",
  },
  increament: {
    display: "inline-flex",
  },
  increamentLabel: {
    padding: "5px",
  },
  increamentNumber: {
    // padding: 7px 14px 7px 14px;
    border: "thin solid #243851",
    padding: "12px 14px 12px 14px",
    display: "inline-flex",
  },
};
const IncreamentComp = ({ label }) => {
  return (
    <div style={style.increament}>
      <div style={style.increamentLabel}>{label}</div>{" "}
      <div style ={{height :"10px"}}>
        <div style={style.increamentNumber}>
          <label>1</label>
        </div>
        <div
          style={{
            paddingLeft: "11px",
            paddingRight: "11px",
            paddingTop: "2px",
            paddingBottom: "2px",
            border: "thin solid #243851",
          }}
        >
          <div className="four" onClick={console.log("clicked")}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="five">
            {" "}
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreamentComp;
