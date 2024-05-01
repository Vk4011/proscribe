const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("\n\tConnected to MongoDB...\n");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = db;

