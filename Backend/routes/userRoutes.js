const express=require("express");
const route=express.Router();
const userController=require("../controllers/userControllers");

route.post("/Bookingsave",userController.bookingDataSave )
route.get("/Bookingdisplay",userController.bookingDataDisplay)

module.exports=route;