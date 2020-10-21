const express = require("express");
const router = express.Router();
const db = require("./../../Db/db").db;
const { check, validationResult } = require("express-validator");

// route :PUT /api/v1/settings
// desc : updates settings to db for user identified by Id/UserID;
//          for demo I am asuming User Id to be ID.
// access : Public for now but will need to be secured in production
router.get(
  "/",
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const ID = req.query.ID;
      if(!ID)  return res.status(400).json({ msg:"ID parameter is required." });
      let sql = `SELECT * FROM user_setting WHERE ID = ${ID};`;
      db.query(sql, (err, settings) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "Error while fetching data." });
        } else {
          if (!settings[0]) {
            return res.json({ msg: "No settings stored for the user." });
          } else return res.json({ settings: settings[0] });
        }
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :POST /api/v1/settings
// desc : adds new settings to db;
// access : Public for now but will need to be secured in production
router.post(
  "/",
  [
    check("waittarget1", "Wait target 1 is required").not().isEmpty(),
    check("waittarget2", "Wait target 2 is required").not().isEmpty(),
    check("incognito", "Incognito is required").not().isEmpty(),
    check("pagestart", "Page start field is required").not().isEmpty(),
    check("pagestop", "Page stop field is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        ID,
        waittarget1,
        waittarget2,
        incognito,
        visitpage,
        pagestart,
        pagestop,
      } = req.body;
      const settings = {
        waittarget1,
        waittarget2,
        incognito,
        visitpage,
        pagestart,
        pagestop,
      };

      const sql = "INSERT INTO user_setting SET?";

      let query = db.query(sql, settings, (err, result) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while saving to db. Check server log!" });
        }
        res.json({ msg: "Settings saved" });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :PUT /api/v1/settings
// desc : updates settings to db for user identified by Id/UserID;
//          for demo I am asuming User Id to be ID.
// access : Public for now but will need to be secured in production
router.put(
  "/",
  [
    check("ID", "ID is required to update").not().isEmpty(),
    check("waittarget1", "Wait target 1 is required").not().isEmpty(),
    check("waittarget2", "Wait target 2 is required").not().isEmpty(),
    check("incognito", "Incognito is required").not().isEmpty(),
    check("pagestart", "Page start field is required").not().isEmpty(),
    check("pagestop", "Page stop field is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        ID,
        waittarget1,
        waittarget2,
        incognito,
        visitpage,
        pagestart,
        pagestop,
      } = req.body;
      const settings = {
        ID,
        waittarget1,
        waittarget2,
        incognito,
        visitpage,
        pagestart,
        pagestop,
      };
      const sql = `UPDATE  user_setting SET ? WHERE id =${ID}`;

      let query = db.query(sql, settings, (err, result) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while saving to db. Check server log!" });
        }
        res.json({ msg: "Settings updated" });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
module.exports = router;
