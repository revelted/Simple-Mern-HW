// That parenthesis is important and will haunt your dreams.
const router = require("express").Router();
const users = require("../init_data.json").data;
const {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
} = require("../controllers/users");

let id = users.length + 1;

/**
 * Because we exported this module as usersRoute
 * and we're importing the module this way:
 *  - app.use("/api/users", usersRouter);
 *
 * We know anything here will be prefaced with
 * /api/users. No need to include it twice!
 */
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.delete("/:id", deleteUserById);

module.exports = router;
