const express=require("express");
const route=express.Router();
const userController = require("../controllers/userControllers");


route.post("/bookingsave",userController.bookingDataSave )
route.get("/bookingdisplay",userController.bookingDataDisplay)

module.exports=route;