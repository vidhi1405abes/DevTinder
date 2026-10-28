const express = require("express");
const app = express();
const {userDataAuth}=require("./middlewares/auth");
app.get("/userData", userDataAuth,(req, res, next) => {
  console.log("Hell from userData API");
  res.send("This is the userData u requested");
});
app.delete("/userData",userDataAuth, (req, res, next) => {
  console.log("Hell from userData API");
  res.send("This is the userData u deleted");
});

app.listen(3001, () => {
  console.log("hi from server");
});
