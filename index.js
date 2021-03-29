require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const collectionRoutes = require("./routes/collection");
app.use(collectionRoutes);

const collectionDetailsRoutes = require("./routes/collectionDetails");
app.use(collectionDetailsRoutes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});