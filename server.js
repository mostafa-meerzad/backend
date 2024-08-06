const express = require("express");
const mongoose = require("mongoose");

const app = express();
// middleware
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  return res.send("Hello Node.js World!");
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
