const express = require("express");
const { login, signup, logout } = require("../controllers/user");
const User = require("../models/user");
const verifyJwt = require("../middlewares/verifyJwt");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyJwt, logout);
module.exports = router;
