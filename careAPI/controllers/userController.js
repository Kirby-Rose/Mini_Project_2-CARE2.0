const path = require("path");
const { setDefaultHighWaterMark } = require("stream");
const fs = require("fs").promises;

const getAllUsers = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/data/users.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(fileContent);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).json({ error: "Failed to load users" });
  }
};

module.exports = { getAllUsers };
weepoo;
