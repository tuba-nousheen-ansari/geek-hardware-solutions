const express= require("express");
const router=express.Router();

const adminController=require("../../controller/admincontroller/AdminController.js");

router.get("/",adminController.loginpage);

module.exports =router;