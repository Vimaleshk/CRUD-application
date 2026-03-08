const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://Vimalesh:<db-password>@yt-backend.ldpox6o.mongodb.net/halley")

    console.log("Database Connected")
}


module.exports = connectDB
