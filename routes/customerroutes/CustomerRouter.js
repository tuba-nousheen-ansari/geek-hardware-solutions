const express= require("express");
const router=express.Router();

const customerController=require("../../controller/customercontroller/CustomerController.js");

router.get("/",customerController.homepage);

module.exports =router;