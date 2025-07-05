const db=require('../util/databse')
module.exports.insert=async(userData)=>{
   console.log(userData.name)
   console.log(typeof userData)
    let query="INSERT INTO `students`(`name`,`age`) VALUES(?,?)"
 let id=0;
 try{
  let result=await db.execute(query,[userData.name,userData.age])
 console.log(result)
 id=result[0].insertId;
 }
 catch(error){
    console.log(error);
 }
   return id;
 }



 module.exports.get=async(userdata)=>{

    let query="SELECT * FROM    `students` WHERE id=?"
    let retData='';
  try{
    let result=await db.execute(query,[userdata.id])
    retData= result[0][0];
 }
 catch(error){
    console.log(error);
 }
   return retData;
 }



 module.exports.update=async(userdata)=>{
   let query = "UPDATE `students` SET name =? WHERE id = ?";
     console.log(userdata)
  try{
    let result=await db.execute(query,[userdata.name,userdata.id])
    console.log(result)
 }
 catch(error){
    console.log(error);
 }
  
 }


  module.exports.delete=async(userdata)=>{
   let query = "DELETE  from  `students` WHERE id = ?";
  try{
    await db.execute(query,[userdata.id])
  return true;
 }
 catch(error){
    console.log(error);
    return false;
 }
  
 }

