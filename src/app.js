const express = require("express");
const app = express();
const { connectDB } = require("./connection/database");
const {userModel}=require("./models/user")
app.use(express.json())
app.post("/signup",async(req,res,next)=>{
 const user=new userModel(req.body);
 await user.save()
 res.send("User added successfully!!")
})
app.get("/feed",async(req,res,body)=>{
  
})
connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(7777, (req, res, next) => {
      console.log("Project running on port 7777.....");
    });
  })
  .catch(() => {
    console.log("Database not found");
  });
