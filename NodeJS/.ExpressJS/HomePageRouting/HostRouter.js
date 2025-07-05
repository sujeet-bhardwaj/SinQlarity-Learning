 const express=require('express')
 const path=require('path')
  const hostrouter=express.Router()

 hostrouter.get("/Add-home",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","Add-Home.html"))


    // res.send(`<h1>Added Your Home</h1>
    //    <form action="/Home-added" method="POST">
    //   <input type="text" name="homename">
    //    <input type="submit" value="AddHome ">
    // </form>`)   
})
hostrouter.post("/Home-added",(req,res)=>{
    console.log(req.body)

     res.sendFile(path.join(__dirname,"views","Home.html"))
    // res.send(`<h1>Home Added Succesfully</h1>
    // <a href="/">Go to home</a> `)   
})

// exports.hostrouter=hostrouter;
module.exports=hostrouter;