  const express=require('express')
   const app=express()
   app.use(express.json())
  const userroute=require('./router/user')

  app.use("/user",userroute) 

   app.listen(3000)

