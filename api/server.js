const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const Port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/DB_NAME", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port, () => {
  console.log("Server is running on port 3001");
});
