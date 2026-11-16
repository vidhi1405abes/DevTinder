const adminAuth = (req, res, next) => {
  const token = "ssxyz";
  if (token === "xyz") {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
};
module.exports={
    adminAuth
}