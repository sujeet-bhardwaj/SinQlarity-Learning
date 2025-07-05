const express=require('express')
  const homeroute=express.Router()
  const path=require('path')
   const rootdir=require('../util/path-util')
  homeroute.get("/",(req,res)=>{
    // console.log("hello jii")
    //   res.send(`<h1>Welcome to Airbnb</h1>
    // <a href="/Add-home">Add Home</a>`)
  //      const fullPath = path.join(process.cwd(), 'views', 'Home.html');
  // console.log("Sending file:", fullPath);
  // res.sendFile(fullPath); // ✅ Correct method
  
  res.sendFile(path.join(rootdir, 'views', 'index.html'));
    
})
module.exports=homeroute

