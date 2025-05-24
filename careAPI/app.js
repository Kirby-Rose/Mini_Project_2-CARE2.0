const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "auth-token"],
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

// Allows us to recieve json body objects
app.use(express.json());

// map all routes to the express app
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/user", userRoutes);
app.use("/auth", authRoutes);
app.use("/pets", petRoutes);
app.use("/products", productRoutes);
// export the app
module.exports = app;
