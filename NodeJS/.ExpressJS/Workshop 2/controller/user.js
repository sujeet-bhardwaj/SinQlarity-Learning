const usermodel=require('../models/muser')

module.exports.register=async(req,res)=>{
 try {
  
  let result= await usermodel.create(req.body)
console.log(result.dataValues.id);
  res.send({status:"succes",data:{id:result.dataValues.id}})
 } catch (error) {
  
    res.send({status:"error",message:"User Registration failed"})
 }
}
module.exports.get= async(req,res)=>{
try {
  let data= await usermodel.findByPk(req.body.id)
console.log(data);
  res.send({status:"succes",data:data})

} catch (error) {
    res.send({status:"error",message:"User Registration failed"})
}

}
module.exports.update= async(req,res)=>{

  try {
    let user= await usermodel.findByPk(req.body.id)
    user.password=req.body.password;
    await user.save();
      res.send({status:"succes",message:"user data updated"})
  } catch (error) {
      res.send({status:"error",message:"user not found "}) 
  }
}
module.exports.delete=async(req,res)=>{
   try {
      let user= await usermodel.findByPk(req.body.id)
      await user.destroy();
         res.send({status:"succes",message:"user data deleted"})
   } catch (error) {
    
       res.send({status:"error",message:"user not deleted"}) 
   }


}