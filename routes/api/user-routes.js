const router = require("express").Router();

const {
  updateUser,
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getOneUser).delete(deleteUser).put(updateUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)

module.exports = router;
