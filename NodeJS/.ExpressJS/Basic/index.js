
const express=require('express')

const app=express()

app.use((req,res,next)=>{
     console.log("first middleware")
     res.send("end the web page")
    next()
})

app.use((req,res,next)=>{
      console.log("second  middleware")
    next()
})
app.use((req,res,next)=>{
    console.log("third middleware")
   next()
})

app.listen(3001)



