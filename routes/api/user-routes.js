const router = require("express").Router();

const { getAllUsers, createUser } = require("../../controllers/user-controller");

router.route("/").post(createUser).get(getAllUsers);

module.exports = router;
