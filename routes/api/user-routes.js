const router = require("express").Router();

const { getAllUsers, createUser, getOneUser , deleteUser} = require("../../controllers/user-controller");

router.route("/").post(createUser).get(getAllUsers);

router.route("/:id").get(getOneUser).delete(deleteUser);

module.exports = router;
