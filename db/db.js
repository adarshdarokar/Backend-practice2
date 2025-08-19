const mongoose = require("mongoose")


function connectDB() {
    mongoose.connect('mongodb+srv://adarshbackend2:tlZAV194JRN6dM44@cluster0.kebvguo.mongodb.net/backend2')
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    })
    }

    module.exports = connectDB;
