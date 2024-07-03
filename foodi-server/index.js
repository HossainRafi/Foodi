const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodi.1etufpk.mongodb.net/foodi?retryWrites=true&w=majority&appName=foodi`
  )
  .then(
    console.log(
      `............................................................................DATABASE CONNECTED SUCCESSFULLY`
    )
  )
  .catch((error) =>
    console.log("Error occured when connected to mongoDB", error)
  );

// import routes here
const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);

// testing surver is running or not
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `.............................................................................APP IS LISTENING ON PORT ${port}`
  );
});
