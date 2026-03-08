const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://Vimalesh:Vky%40123@yt-backend.ldpox6o.mongodb.net/halley")

    console.log("Database Connected")
}

module.exports = connectDB