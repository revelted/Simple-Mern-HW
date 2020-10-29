const express = require("express"),
  usersRouter = require("./routes/users.js"),
  morgan = require("morgan"),
  app = express();

app.use(express.json());

// We added some more middleware.
// This one adds logging!
app.use(morgan("dev"));

app.use("/api/users", usersRouter);

// We'll also add an error handler as well.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

module.exports = app;
