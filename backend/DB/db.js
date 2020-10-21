const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "shishir",
  password: "shishir",
  database: "googleads",
});
const connectDB = () => {
  return new Promise((resolve) => {
    db.connect((err) => {
      if (err) {
        throw err;
      }else 

      return resolve("Db connected")
    });
  });
};

module.exports = { connectDB,db };
