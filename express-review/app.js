// app.js

// ?
const express = require("express");

// ?
const app = express();

// ?
const port = process.env.PORT || 5000;

// ?
app.get("/", function (req, res) {
  // ?
  res.send("Ahoy, matey!");
});

// ?
app.listen(port, () => {
  // ?
  console.log(`Server is running on port: ${port}`);
});
