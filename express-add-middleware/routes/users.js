const router = require("express").Router(),
  users = require("../init_data.json").data,
  {
    getAllUsers,
    getUserById,
    addUser,
    deleteUserById,
  } = require("../controllers/users");

let id = users.length + 1;

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.delete("/:id", deleteUserById);

module.exports = router;
