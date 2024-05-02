const express = require("express");
const { login, signup } = require("../controllers/user");
const User = require("../models/user");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
