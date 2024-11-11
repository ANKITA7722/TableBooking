const express=require("express");
const route=express.Router();
const userController = require("../controllers/userControllers");

route.post("/save",userController.bookingDataSave )
route.get("/Bookingdisplay",userController.bookingDataDisplay)

module.exports=route;