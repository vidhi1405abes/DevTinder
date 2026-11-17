const express = require("express");
const app = express();
const { connectDB } = require("./connection/database");
const {userModel}=require("./models/user")
app.post("/signup",async(req,res,next)=>{
  const userDetails={
    firstName:"Vidhi",
    lastName:"Gandhi",
    Gender:"F",
    age:21,
    password:"123@@1"
  }
  const user= new userModel(userDetails);
  await user.save();
  res.send("User Added to the database...")
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
