const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// testing server is running or not
app.get("/", (req, res) => {
  res.send("Server is running.............!");
});

app.listen(port, () => {
  console.log(
    `Web app listening on port ${port}......................................`
  );
});
