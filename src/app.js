const express = require("express");
const app = express();
//this will map to post
app.get("/user",(req,res)=>{
    res.send("User data");
})
//this will match to all HTTP methods
app.get("/test",(req, res) => {
  res.send("Hello from the test!");
}); // the callback function out here is known as request handler
app.post("/user",(req,res)=>{
    res.send("Data saved successfully");
})
app.listen(3001, () => {
  console.log("hi from server");
});
