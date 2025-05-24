const express = require("express");
const {
  login,
  changePassword,
  addUser,
  getUser,
} = require("../controllers/authControllers");

const router = express.Router();

// Define routes
router.post("/login", login);
router.post("/change-password", changePassword);
router.post("/add-user", addUser);
router.post("/user", getUser);

module.exports = router;
