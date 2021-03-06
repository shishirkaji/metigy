import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import IncreamentComp from "./IncreamentComp";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
const Settings = ({
  classes,
  settings,
  onStart,
  onStop,
  onExport,
  settingsHandler,
}) => {
  useEffect(() => {}, [settings]);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
    checkedJ: true,
    checkedK: true,
    checkedL: true,
    checkedM: true,
    checkedN: true,
    checkedO: true,
    checkedP: true,
    checkedQ: true,
    checkedR: true,
  });
  const useStyles = makeStyles({
    button: {
      textTransform: "none",
      color: "white",
      fontSize: "1rem",
      marginLeft: "10px",
    },
  });
  const buttonStyle = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    para: {
      padding: "10px 5px 5px 5px",
      display: "inline-flex",
    },

    increamentNumber: {
      // padding: 7px 14px 7px 14px;
      border: "thin solid #243851",
      padding: "7px 14px 7px 14px",
      display: "inline-flex",
    },
  };
  return (
    <Grid item xs={12} md={12} lg={6}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <SettingsOutlinedIcon style={{ color: "#ffc400" }} fontSize="large" />{" "}
        <h2>Settings </h2>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <div style={{ backgroundColor: "#253046", padding: "12px" }}>
            <FormGroup row>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="Chrome"
                />
              </div>{" "}
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Firefox"
                />
              </div>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedC}
                      onChange={handleChange}
                      name="checkedC"
                      color="primary"
                    />
                  }
                  label="Explorer"
                />
              </div>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedD}
                      onChange={handleChange}
                      name="checkedD"
                      color="primary"
                    />
                  }
                  label="Safari"
                />
              </div>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedE}
                      onChange={handleChange}
                      name="checkedE"
                      color="primary"
                    />
                  }
                  label="Opera"
                />
              </div>
            </FormGroup>
          </div>{" "}
        </Grid>
        <Grid item xs={3}>
          <div style={{ backgroundColor: "#253046", padding: "12px" ,overflow: "auto" }}>
            <FormGroup row>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={settings.incognito }
                      onChange={() => {
                        settingsHandler(
                          "checkbox",
                          !settings.incognito,
                          "incognito"
                        );
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Incognito"
                />
              </div>
            </FormGroup>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3px" }}>
        <div style={{ backgroundColor: "#253046", paddingLeft: "10px" }}>
          <div
            style={{
              alignItems: "left",
              padding: "10px",
              display: "inline-flex",
            }}
          >
            <IncreamentComp
              label="wait"
              settingsHandler={settingsHandler}
              name="waittarget1"
              value={settings.waittarget1}
            />
            <IncreamentComp
              label={null}
              name="waittarget2"
              settingsHandler={settingsHandler}
              value={settings.waittarget2}
            />{" "}
            <div style={style.para}>seconds on the targeted website.</div>
          </div>
          <div style={style.para}>
            <FormGroup row>
              <div style={style.checkbox}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={settings.visitpage}
                      onChange={() => {
                        settingsHandler(
                          "checkbox",
                          !settings.visitpage,
                          "visitpage"
                        );
                      }}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Visit the page with the Site"
                />
              </div>
            </FormGroup>{" "}
            {/* <div style={style.para}>Visit the paage with the Site.</div> */}
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ backgroundColor: "#253046", paddingLeft: "10px" ,overflow: "auto"  }}>
          <div
            style={{
              alignItems: "left",
              padding: "10px",
              display: "inline-flex"
            }}
          >
            <IncreamentComp
              onAdd={null}
              settingsHandler={settingsHandler}
              name="pagestart"
              value={settings.pagestart}
              onSub={null}
            />
            <div style={style.para}>pages</div>
            <IncreamentComp
              label={null}
              value={settings.pagestop}
              name="pagestop"
              settingsHandler={settingsHandler}
            />
            <IncreamentComp label={null} value={40} />
            <div style={style.para}>Visit from to second.</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ backgroundColor: "#253046", paddingLeft: "10px" }}>
          <div
            style={{
              alignItems: "left",
              padding: "10px",
              display: "inline-flex",
            }}
          >
            {" "}
            <div style={style.para}>After the operatio is complete</div>
            <IncreamentComp label={null} value={40} />
            <IncreamentComp label={null} value={40} />
            <div style={style.para}>seconds wait.</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ backgroundColor: "#253046", paddingLeft: "10px" }}>
          <div
            style={{
              alignItems: "left",
              padding: "10px",
              display: "inline-flex",
            }}
          >
            <div style={style.para}>Target site</div>
            <IncreamentComp label={null} value={10} />{" "}
            <div style={style.para}>if not found times</div>
            <IncreamentComp label={null} value={10} />{" "}
            <div style={style.para}>minutes wait.</div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ backgroundColor: "#253046", paddingLeft: "10px" }}>
          <div
            style={{
              alignItems: "left",
              padding: "10px",
              display: "inline-flex",
            }}
          >
            <IncreamentComp label={null} value={40} />{" "}
            <div style={style.para}>automatic reset after operation.</div>
          </div>
        </div>
      </Grid>
      {/* the third block of the settings */}
      <Grid item xs={12} style={{ marginTop: "8px" }}>
        <div style={{ backgroundColor: "#253046", padding: "12px" }}>
          <FormGroup row>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedG}
                    onChange={handleChange}
                    name="checkedG"
                    color="primary"
                  />
                }
                label="Device Reset"
              />
            </div>{" "}
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedH}
                    onChange={handleChange}
                    name="checkedH"
                    color="primary"
                  />
                }
                label="Vinn Reset"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedI}
                    onChange={handleChange}
                    name="checkedI"
                    color="primary"
                  />
                }
                label="Phone Reset"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedJ}
                    onChange={handleChange}
                    name="checkedJ"
                    color="primary"
                  />
                }
                label="Mobile Data"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedK}
                    onChange={handleChange}
                    name="checkedK"
                    color="primary"
                  />
                }
                label="Fly Mode"
              />
            </div>
          </FormGroup>
        </div>{" "}
      </Grid>
      {/* the fourth block of the settings */}
      <Grid item xs={12} style={{ marginTop: "8px" }}>
        <div style={{ backgroundColor: "#253046", padding: "12px" }}>
          <FormGroup row>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedL}
                    onChange={handleChange}
                    name="checkedL"
                    color="primary"
                  />
                }
                label="Remove Cookies"
              />
            </div>{" "}
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedM}
                    onChange={handleChange}
                    name="checkedM"
                    color="primary"
                  />
                }
                label="Change Resolution"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedN}
                    onChange={handleChange}
                    name="checkedN"
                    color="primary"
                  />
                }
                label="Mouse Tracks"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedO}
                    onChange={handleChange}
                    name="checkedO"
                    color="primary"
                  />
                }
                label="Data Saving Mode"
              />
            </div>
          
          </FormGroup>
          <FormGroup row>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedP}
                    onChange={handleChange}
                    name="checkedP"
                    color="primary"
                  />
                }
                label="Random Generate"
              />
            </div>{" "}
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedQ}
                    onChange={handleChange}
                    name="checkedQ"
                    color="primary"
                  />
                }
                label="Analytics Protection"
              />
            </div>
            <div style={style.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedR}
                    onChange={handleChange}
                    name="checkedR"
                    color="primary"
                  />
                }
                label="Remove History"
              />
            </div>
            
          </FormGroup>
        </div>{" "}
      </Grid>
      <Grid item xs={12} style={{ marginTop: "8px" }}>
        <Button
          className={buttonStyle.button}
          variant="contained"
          style={{ backgroundColor: "#FDBC00" }}
          onClick={(e) => onExport(settings)}
        >
          Export Report
        </Button>
        <Button
          className={buttonStyle.button}
          startIcon={<PanToolOutlinedIcon />}
          variant="contained"
          style={{ backgroundColor: "#0086F9" }}
          onClick={(e) => onStop()}
        >
          Stop
        </Button>
        <Button
          className={buttonStyle.button}
          startIcon={<PlayCircleOutlineOutlinedIcon />}
          variant="contained"
          style={{ backgroundColor: "#00A84B" }}
          onClick={(e) => onStart(settings)}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  );
};

export default Settings;
