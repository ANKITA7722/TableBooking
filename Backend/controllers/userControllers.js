const bookingModel = require("../models/userModels");

const bookingDataSave = async (req, res) => {
    const { name, email, mobile, tableType, date, time, message } = req.body;
    
    try {
        const Booking = await bookingModel.create({
            name: name,
            email: email,
            mobile: mobile,
            tableType: tableType,
            date: date,
            time: time,
            message: message
        });
        
        console.log("Booking data saved!");
        // Send the success response
        res.status(200).json(Booking);
    } catch (error) {
        // Send the error response
        res.status(500).json({ error: "Failed to save booking data. Please try again." });
    }
};

const bookingDataDisplay = async (req, res) => {
    try {
        const bookingData = await bookingModel.find();
        console.log("Booking data displayed successfully!");
        res.status(200).json(bookingData);
    } catch (error) {
        res.status(404).json("Data from MongoDB not found!");
    }
};

module.exports = {
    bookingDataSave,
    bookingDataDisplay
};
