const {mongoose}=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://vidhigandhi1405_db_user:1zq4DFWFbqR9LOvp@cluster0.gfct3ux.mongodb.net/devTinderTest");
    
}
module.exports={
    connectDB
}