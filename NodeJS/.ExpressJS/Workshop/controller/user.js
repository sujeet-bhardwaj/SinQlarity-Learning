const usermodel=require('../models/muser')

module.exports.register=async(req,res)=>{
 
let insertid= await usermodel.insert(req.body)
console.log(insertid);
 
 if(insertid>0){
  res.send({status:"succes",data:{id:insertid}})
 }
else{
  res.send({status:"error",message:"User Registration failed"})
}
}
module.exports.get= async(req,res)=>{
let data= await usermodel.get(req.body)
console.log(data);
 
 if(data){
  res.send({status:"succes",data:data})
 }
else{
  res.send({status:"error",message:"User Registration failed"})
}
}
module.exports.update= async(req,res)=>{
let data= await usermodel.update(req.body)
if(data){
   res.send({status:"succes",message:"user data updated"})
}
else{
       res.send({status:"error",message:"user not found "}) 
}

}
module.exports.delete=async(req,res)=>{
let data= await usermodel.delete(req.body)
if(data){
   res.send({status:"succes",message:"user data deleted"})
}
else{
       res.send({status:"error",message:"user not deleted"}) 
}
}
