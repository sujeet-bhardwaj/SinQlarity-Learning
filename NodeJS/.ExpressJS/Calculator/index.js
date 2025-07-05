  const express=require('express')
  const calcrouter=require('./router/calculator')
   const app=express()
   app.use(express.json())

//    app.get("/",(req,res)=>{
//           res.send("hello ji")          
//    })
   app.use("/calc",calcrouter)
//      app.get("/add",(req,res)=>{
//          let n1=5;
//          let n2=4;
//          let sum=n1+n2;
//          res.send(`Sum is ${sum}`)       
//    })


 


   app.listen(4000)

