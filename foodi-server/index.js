const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// hossainrafi71
// b9d5fkJ8hhBhrs0k

// mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://hossainrafi71:b9d5fkJ8hhBhrs0k@foodi.1etufpk.mongodb.net/?retryWrites=true&w=majority&appName=foodi`
  )
  .then(
    console.log(
      `............................................................................DATABASE CONNECTED SUCCESSFULLY`
    )
  )
  .catch((error) => console.log("Error when connected to mongoDB", error));

// testing surver is running or not
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `.............................................................................APP IS LISTENING ON PORT ${port}`
  );
});
