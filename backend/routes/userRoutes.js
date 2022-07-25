const express = require("express");
const router = express.Router();
const {
  //these are the controller functions
  registerUser,
  loginUser,
  getMe,
  // getUsers
} = require("../controllers/userController");

const {protect} = require('../middleware/authMiddleware');

//the reason that this route is working for api/users even tho there is only a slash is because in server.js the api/users are connected to this route file.
router.post("/", registerUser);

//the second argument are functions that comes from the  controller.
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;


