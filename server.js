const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const User = require("./models/user");

const app = express();
// middleware
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  return res.send("Hello Node.js World!");
});

// get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// create a new user
app.post("/api/users", async (req, res) => {
  const user = new User({ name: req.body.name, email: req.body.email });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
