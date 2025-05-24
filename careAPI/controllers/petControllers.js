const path = require("path");
const fs = require("fs").promises;

const getAllPets = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/data/PetDetails.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const pets = JSON.parse(fileContent);
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error reading pets:", error);
    res.status(500).json({ error: "Failed to load pets" });
  }
};

module.exports = { getAllPets };
