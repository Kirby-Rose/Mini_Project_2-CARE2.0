const express = require("express");
const { users } = require("../public/data/users");
const router = express.Router();

router.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
});

router.get("/", (req, res) => {
  res.json({ result: users });
});

// Dynamic request param endpoint - get the user matching the specific ID ie. /users/3
router.get("/:id", (req, res) => {
  console.log(req.params);
  let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
  let user = users.find((user) => user.id == userId);
  user
    ? res.status(200).json({ result: user })
    : res.status(404).json({ result: `User ${userId} not found` });
});

// a POST request with data sent in the body of the request, representing a new user
router.post("/", (req, res) => {
  let newUser = req.body; // first update index.js
  console.log(newUser);
  // we can add some validation as well
  if (!newUser.name || !newUser.pet) {
    res.status(500).json({ error: "User must contain a name and pet" });
    return;
  } else if (!newUser.id) {
    // if no ID, generate one
    newUser.id = users.length + 1;
  }
  // if the new user is valid, add them to the list
  users.push(newUser);
  res.status(200).json(newUser); // return the new user
});

module.exports = router;
