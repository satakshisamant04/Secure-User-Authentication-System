const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");



require("dotenv").config();
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

// Connect DB
connectDB();

// use route
app.use("/api/users", userRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server running on port 3000"));
