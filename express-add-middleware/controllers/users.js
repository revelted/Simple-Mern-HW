const users = require("../init_data.json").data;
let id = users.length + 1;

const getAllUsers = (req, res, next) => {
  res.json(users);
};

const getUserById = (req, res, next) => {
  const user = users.find((v) => v.id === Number(req.params.id));
  if (!user) {
    // Now that we have middleware to handle error handlers,
    // we can actually build some!
    let err = new Error("Not Found");
    err.statusCode = 404;
    next(err);
  }
  res.status(200).json(user);
};

const addUser = (req, res, next) => {
  const user = Object.assign({}, req.body, { id });
  id++;
  users.push(user);
  res.status(201).json(user);
};

const deleteUserById = (req, res, next) => {
  const userIndex = users.findIndex((v) => v.id === Number(req.params.id));
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  res.status(204).json(deletedUser);
};

module.exports = { getAllUsers, getUserById, addUser, deleteUserById };
