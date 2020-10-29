const express = require("express");

// From here we'll add our user routes module:
const usersRouter = require("./routes/users.js");

const app = express();

app.use(express.json());

// and add it as our middleware:
app.use("/api/users", usersRouter);

module.exports = app;
