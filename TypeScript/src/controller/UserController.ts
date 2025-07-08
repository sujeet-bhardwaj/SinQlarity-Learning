import { UserDb,UserUpdateDb } from '../models/UserModel'
import { Request,Response } from 'express'
const  register=(req:Request,res:Response)=>{
    let data=req.body
    // console.log(data)
    // const username="sujeet"
    // const rclass="MCA"
    //  const result=UserDb(username,rclass);
          
     const result=UserDb(data.name,data.age)
   res.send(`User Registration-add${result}`)       
  }

  const UpdateuserData=(req:Request,res:Response)=>{
UserUpdateDb(req.body);
  res.send("completed this step")
  }

  export { register,UpdateuserData}