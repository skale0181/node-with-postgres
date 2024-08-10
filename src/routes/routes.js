const router = require("express").Router();
const { getUserHello, createSchool, getUser } = require("../controller/userController");

router.get("/get-user-hello", getUserHello);
router.post("/create-school", createSchool);
router.get("/get-user", getUser);

module.exports = router;