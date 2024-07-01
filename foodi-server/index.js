const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
console.log(process.env.DB_USER);

// middlewares
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodi.q8mmsmf.mongodb.net/?appName=Foodi`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// testing server is running or not
app.get("/", (req, res) => {
  res.send("Server is running.............!");
});

app.listen(port, () => {
  console.log(
    `..............................................................................APP IS LISTENING ON PORT ${port}`
  );
});
