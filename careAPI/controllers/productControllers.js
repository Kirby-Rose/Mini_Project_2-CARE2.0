const path = require("path");
const fs = require("fs").promises;

const getAllProducts = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/data/ShopDetails.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(fileContent);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error reading products:", error);
    res.status(500).json({ error: "Failed to load products" });
  }
};

module.exports = { getAllProducts };
