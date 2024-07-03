const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// testing surver is running or not
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `.............................................................................APP IS LISTENING ON PORT ${port}`
  );
});
