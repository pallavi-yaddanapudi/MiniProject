const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const agentRoutes = require("./routes/agentRoutes");
const donorRoutes = require("./routes/donorRoutes");
const userRoutes = require("./routes/user.js");
const donationRoutes = require("./routes/donations.js");

const cors = require('cors');

dotenv.config(); // Load environment variables


const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); 

const MONGO_URL = process.env.MONGO_URL;

// Database Connection
async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(" Connection established successfully");
    } catch (err) {
        console.error(" Database connection error:", err);
    }
}
main();


// Use Routes
app.use("/admin", adminRoutes);
app.use("/agent", agentRoutes);
app.use("/donor", donorRoutes);
app.use("/",userRoutes);
app.use("/",donationRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Food Donation System API is running...");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(" Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});
