const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bookingRoute = require("./routes/bookingRoutes");

// Connect to MongoDB
mongoose.connect(process.env.DBCONNECTION)
  .then(() => {
    console.log("DB Successfully Connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });


// Use CORS and body-parser middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use routes
app.use("/bookings", bookingRoute);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
