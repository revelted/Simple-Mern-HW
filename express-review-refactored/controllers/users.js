/**
 * We started with this:
 */
// const getAllUsers = () => {};
// const getUserById = () => {};
// const addUser = () => {};
// const deleteUserById = () => {};

// module.exports = { getAllUsers, getUserById, addUser, deleteUserById };

const users = require("../init_data.json").data;
let id = users.length + 1;

/**
 * Then we moved the business logic code - and just
 * the business logic code - over to controllers.
 * Separation of concerns!
 */
const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find((v) => v.id === Number(req.params.id));
  res.status(200).json(user);
};

const addUser = (req, res) => {
  const user = Object.assign({}, req.body, { id });
  id++;
  users.push(user);
  res.status(201).json(user);
};

const deleteUserById = (req, res) => {
  const userIndex = users.findIndex((v) => v.id === Number(req.params.id));
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  res.status(204).json(deletedUser);
};

module.exports = { getAllUsers, getUserById, addUser, deleteUserById };
