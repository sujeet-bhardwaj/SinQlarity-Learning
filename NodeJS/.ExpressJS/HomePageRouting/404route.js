  const path=require('path')
  const express=require('express')

    const notfound=express.Router()
    notfound.use((req,res)=>{
      res.sendFile(path.join(__dirname,"views","404.html"))
//       res.send(`
//     <h1>404 Page Not Found</h1>
// `)   
  })
  module.exports=notfound