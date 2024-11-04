const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true 
    },
    roomType: {
        type: String,
        required: true 
    },
    checkIn: {
        type: Date, 
        required: true
    },
    checkOut: {
        type: Date, 
        required: true
    },
    message: {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model("User", userSchema); 