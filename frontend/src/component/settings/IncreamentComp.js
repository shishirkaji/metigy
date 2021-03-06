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
    padding: "10px 5px 5px 5px",
  },
  increamentNumber: {
    // padding: 7px 14px 7px 14px;
    border: "thin solid #243851",
    padding: "12px 14px 12px 14px",
    display: "inline-flex",
  },
};
const IncreamentComp = ({ label, value, settingsHandler, name }) => {
  return (
    <div style={style.increament}>
      <div style={style.increamentLabel}>{label}</div>{" "}
      <div style={style.increamentNumber}>
        <label>{value}</label>
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
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!settingsHandler || !value) return;
            settingsHandler("add", value + 1, name);
          }}
        >
          +
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (!settingsHandler || !value) return;
            settingsHandler("sub", value - 1, name);
          }}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default IncreamentComp;
