const express = require("express");
const db = require("./../../Db/db").db;
const router = express.Router();
const { check, validationResult } = require("express-validator");
// route :POST /api/v1/keywords
// desc : route to add keywords for user with ID => ID
// access : Public for now but will need to be secured in production
router.post(
  "/",
  [
    check("ID", "user ID  is required to update").not().isEmpty(),
    check("keyword", "Keyword is required").not().isEmpty(),
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const option = { ID: req.body.ID, keyword: `${req.body.keyword}` };
      let sql = "INSERT IGNORE INTO keyword_setting SET ?";
      //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
      let query = db.query(sql, option, (err, result) => {
        if (err) {
          //   console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while saving to db. Check server log!" });
        } else {
          if (result.affectedRows === 0) {
            return res.status(400).json({ msg: "Duplicate Keyword" });
          } else {
            return res.json({ msg: "Keyword Saved" });
          }
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :DELETE /api/v1/keywords
// desc : route to delete keywords sent by user with ID => ID
// access : Public for now but will need to be secured in production
router.delete(
  "/",
  [
    check("ID", "user ID  is required to update").not().isEmpty(),
    check("keyword", "keyword  is required to update").not().isEmpty(),
  ],
  (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {ID,keyword} = req.body
      let sql = `DELETE  FROM keyword_setting WHERE ID = ${ID} AND keyword = "${keyword}";`;
      //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
      let query = db.query(sql ,(err, result) => {
        if (err) {
            console.log(err);
          return res
            .status(500)
            .json({ msg: "Error while deleting from db. Check server log!" });
        } else {
          return res.json({msg : "Keyword successfully deleted"})
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "Server error!" });
    }
  }
);
// route :GET /api/v1/keywords
// desc : route to get keywords for user with ID => ID
// access : Public for now but will need to be secured in production
router.get(
    "/",
    [
      check("ID", "user ID  is required to update").not().isEmpty(),
    ],
    (req, res) => {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {ID} = req.query
        let sql = `SELECT keyword FROM keyword_setting WHERE ID = ${ID};`;
        //   let sql = `INSERT IGNORE INTO keyword_setting (PK_Keywords, ID, keyword) VALUES (NULL, ${ID},${keyword});`;
        let query = db.query(sql ,(err, result) => {
          if (err) {
            return res
              .status(500)
              .json({ msg: "Error while saving to db. Check server log!" });
          } else {
            return res.json({keywords:result})
          }
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Server error!" });
      }
    }
  );
module.exports = router;
