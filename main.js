//basic packages

const express= require("express");
const app = express();
const bodyParser=require("body-parser");
const path = require("path");


//routes package
const adminRouter=require("./routes/adminroutes/AdminRouter.js");
const customerRouter=require("./routes/customerroutes/CustomerRouter.js");

//bodyParser and static file and ejs tetmplate engine
app.use(bodyParser.urlencoded({ extended:true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//adminroutes and userroutes
app.use("/",customerRouter);
app.use("/admin",adminRouter);

app.listen(3000,()=>{
    console.log("Server Start At Port : "+3000);
});