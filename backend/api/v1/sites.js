const express = require("express");
const db = require("./../../Db/db").db;
const router = express.Router();
const { check, validationResult } = require("express-validator");
// route :POST /api/v1/site
// desc : route to add site for user with ID => ID
// access : Public for now but will need to be secured in production
router.post(
  "/",
  [
    check("ID", "user ID  is required to update").not().isEmpty(),
    check("site", "Site is required").not().isEmpty(),
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      console.log(req.body);
      const option = { ID: req.body.ID, site: `${req.body.site}` };
      let sql = "INSERT IGNORE INTO site_setting SET ?";
      //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
      let query = db.query(sql, option, (err, result) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while saving to db. Check server log!" });
        } else {
          console.log(result);
          if (result.affectedRows === 0) {
            return res.status(400).json({ msg: "Duplicate site" });
          } else {
            return res.json({ msg: "Site Saved" });
          }
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :DELETE /api/v1/sites
// desc : route to delete sites sent by user with ID => ID
// access : Public for now but will need to be secured in production
router.delete(
  "/",
  [
    check("ID", "user ID  is required to update").not().isEmpty(),
    check("site", "Site  is required to update").not().isEmpty(),
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {ID,site} = req.body
      let sql = `DELETE  FROM site_setting WHERE ID = ${ID} AND site = "${site}";`;
      //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
      let query = db.query(sql ,(err, result) => {
        if (err) {
            console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while deleting from db. Check server log!" });
        } else {
          console.log(result)
          return res.json({msg : "Site successfully deleted"})
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :GET /api/v1/site
// desc : route to get site for user with ID => ID
// access : Public for now but will need to be secured in production
router.get(
  "/",
  [check("ID", "user ID  is required to update").not().isEmpty()],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { ID } = req.query;
      let sql = `SELECT site FROM site_setting WHERE ID = ${ID};`;
      //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
      let query = db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while fetching from DB. Check server log!" });
        } else {
          return res.json({ sites: result });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
module.exports = router;
