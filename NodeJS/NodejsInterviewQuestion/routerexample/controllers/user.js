const User=require('../models/user')
const  getuser=(req,res)=>{
 
    res.send("user not  found");
}
const  postuser=async(req,res)=>{
     const user=new User(req.body);
     const result= await user.save();
    res.send({ result,status:"user found"});
}
const  putuser=(req,res)=>{
    res.send("user found");
}





module.exports.postuser=getuser
module.exports.putuser=getuser
module.exports.getuser=getuser