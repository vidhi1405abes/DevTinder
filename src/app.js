const express = require("express");
const app = express();

app.use("/test",(req, res) => {
  res.send("Hello from the test!");
}); // the callback function out here is known as request handler
app.use("/print",(req,res)=>{
    res.send("Hi print");
})
app.use("/",(req,res)=>{
    res.send("Hi Home");
})
app.listen(3001, () => {
  console.log("hi from server");
});
