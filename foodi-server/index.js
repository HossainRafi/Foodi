const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

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
    await client.connect();
    //  database & collections
    const menuCollections = client.db("foodi").collection("menus");
    const cartCollections = client.db("foodi").collection("cartItems");

    // all menu items operations
    app.get("/menu", async (req, res) => {
      const result = await menuCollections.find().toArray();
      res.send(result);
    });


    // all carts items operations

    // post cart to database
    app.post("/carts", async (req, res) => {
      const cartItem = req.body
      const result =await cartCollections.insertOne(cartItem)
      res.send(result);
    });

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
