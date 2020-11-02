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

// FIXME: Complete the callback function so we get
// all of the users in JSON when we make a GET call
// to /api/users.
app.get("/api/users", (req, res) => {
  // ...?
});

app.get("/api/users/:id", (req, res) => {
  // Extra credit: What's this line all about?
  const user = users.find((v) => v.id === Number(req.params.id));
  res.status(200).json(user);
});

app.post("/api/users", (req, res) => {
  // Extra credit: What does this line do?
  const user = Object.assign({}, req.body, { id });
  id++;
  users.push(user);
  res.status(201).json(user);
});

app.delete("/api/users/:id", (req, res) => {
  // Extra credit: Or this one?
  const userIndex = users.findIndex((v) => v.id === Number(req.params.id));
  const deletedUser = users[userIndex];

  // Extra credit: ...what?
  users.splice(userIndex, 1);
  res.status(204).json(deletedUser);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
