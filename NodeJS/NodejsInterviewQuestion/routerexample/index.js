 const express=require("express")
 const mongoose=require("mongoose")
  const userroute=require('./routers/user')

 const app=express()
  app.use(express.json());

// user
app.use("/user",userroute)
// 
mongoose.connect("mongodb://localhost:27017/sujeet").then(succes=> app.listen(3000)).catch(err=>console.log(err))
