 const express=require('express')
 const path=require('path')
  const hostrouter=express.Router()
 const rootdir=require('../util/path-util')
 hostrouter.get("/Add-home",(req,res)=>{
        res.sendFile(path.join(rootdir,"views","Add-Home.html"))


    // res.send(`<h1>Added Your Home</h1>
    //    <form action="/Home-added" method="POST">
    //   <input type="text" name="homename">
    //    <input type="submit" value="AddHome ">
    // </form>`)   
})
hostrouter.post("/Home-added",(req,res)=>{
    console.log(req.body)

     res.sendFile(path.join(rootdir,"views","Home.html"))
    // res.send(`<h1>Home Added Succesfully</h1>
    // <a href="/">Go to home</a> `)   
})

// exports.hostrouter=hostrouter;
module.exports=hostrouter;