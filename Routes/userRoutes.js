const express = require("express");

const userControllers = require("../Controllers/userControllers");
const router = express.Router();

router.post("/register", userControllers.createUser);
router.post("/login", userControllers.getUser);
router.post("/recover", userControllers.updateUser);

module.exports = router;
