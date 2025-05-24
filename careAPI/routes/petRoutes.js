const express = require("express");
const { getAllPets } = require("../controllers/petControllers");

const router = express.Router();

router.get("/", getAllPets);
module.exports = router;
