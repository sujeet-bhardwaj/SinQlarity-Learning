
const express=require('express')

const app=express()
app.use(express.json());
app.use("/",(req,res,next)=>{
     console.log("first middleware")
    //  res.send("end the web page")
    next()
})

app.use("/first",(req,res,next)=>{
      console.log("second  middleware")
    next()
})
app.use("/second",(req,res,next)=>{
    console.log("third middleware")
   next()
})
app.get("/submit",(req,res,next)=>{
    res.send("first get metod")
})

app.get("/submit2",(req,res,next)=>{
    res.send("second get metod")
})

app.post("/submit3",(req,res,next)=>{
     let data=req.body
     console.log(data)
    res.send("first post metod")
})


app.listen(3000)



