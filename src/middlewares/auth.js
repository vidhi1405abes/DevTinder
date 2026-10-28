const userDataAuth=(req,res,next)=>{
    const token="Vidhi";
    if(token==="Vidhi"){
        next();
    }
    else{
        res.status(401).send("You do not have permission to do this action");
    }
}
module.exports={
    userDataAuth,
}