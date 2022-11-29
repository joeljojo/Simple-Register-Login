const express = require("express");

const userControllers = require("../Controllers/userControllers");
const router = express.Router();

router.post("/register", userControllers.createUser);

module.exports = router;
