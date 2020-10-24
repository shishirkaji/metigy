const mysql = require("mysql");

const db = mysql.createConnection({
  // for docker changing the host to db 
  host: "db",
  user: "shishir",
  password: "shishir",
  database: "googleads",
});
const connectDB = () => {


  return new Promise((resolve) => {
    db.connect((err) => {
      if (err) {
        console.log("waiting 5 seconds before making another connection attempt")
        setTimeout(() => {
          console.log("exiting the system")
          return process.exit(1)
        }, 5000)

      } else

        return resolve("Db connected")
    });
  });
};

module.exports = { connectDB, db };
