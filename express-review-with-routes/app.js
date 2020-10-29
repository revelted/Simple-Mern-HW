const express = require("express");

const app = express();

/**
 * If we don't have this, we won't be able to
 * parse application/json in our POST.
 */
app.use(express.json());

/**
 * We haven't learned databases YET, but once
 * we will we can get the data in the form of
 * JavaScript data structures we're familiar
 * with. Tell me what you think this does!
 */
const users = require("./init_data.json").data;

/**
 * A big part of databases are unique IDs.
 * We're not using a database (yet), so we'll
 * have to fake the ID ourselves. For now.
 */
let id = users.length + 1;

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((v) => v.id === Number(req.params.id));
  res.status(200).json(user);
});

app.post("/api/users", (req, res) => {
  // oh wow, what is this black magic? Let's
  // break it down piece by piece...
  const user = Object.assign({}, req.body, { id });
  id++;
  users.push(user);
  // res.json(user);
  // actually, let's have it properly assign
  // the HTTP code for newly added.
  res.status(201).json(user);
});

app.delete("/api/users/:id", (req, res) => {
  const userIndex = users.findIndex((v) => v.id === Number(req.params.id));
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  res.status(204).json(deletedUser);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
