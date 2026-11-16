const express=require("express")
const app= express();
const {adminAuth}=require("./middlewares/auths");
app.use("/admin",adminAuth);
app.get("/admin/getAdminInfo",(req,res,next)=>{
  res.send("This is the admin details")
})
app.delete("/admin/deleteAdmin",(req,res,next)=>{
  res.send("Admin deleted");
})
app.listen(7777,()=>{
  console.log("Project running successfully on 7777...");
  
})