 const mongoose=require("mongoose")
// schema
 const userSchema=new mongoose.Schema({
 username:String,
 mobile:String,
 })
// model
const User=mongoose.model("User",userSchema);

module.exports=User;