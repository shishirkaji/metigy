const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./DB/db").connectDB;
// cors config
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,x-auth-token, Content-Type, Accept"
  );
  next();
});
// body parser
app.use(express.json());
// db
let db = null;
connectDb().then((res) => 
{

console.log(res)
  app.listen(PORT, () => {
    console.log(`Server started and listening on port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  return res.send("API running!");
});

app.use("/api/v1/settings", require("./api/v1/settings")); //route related to settings!
app.use("/api/v1/keywords", require("./api/v1/keywords")); //route related to keywords!
app.use("/api/v1/sites", require("./api/v1/sites")); //route related to sites!
module.exports = {db};
