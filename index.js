require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const collectionRoutes = require("./routes/collection");
app.use(collectionRoutes);

const collectionDetailsRoutes = require("./routes/collectionDetails");
app.use(collectionDetailsRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});