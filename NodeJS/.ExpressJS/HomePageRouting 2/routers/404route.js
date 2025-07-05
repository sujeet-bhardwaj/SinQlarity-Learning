  const path=require('path')
  const express=require('express')
    const rootdir=require('../util/path-util')
    const notfound=express.Router()
    notfound.use((req,res)=>{
      res.sendFile(path.join(rootdir,"views","404.html"))
//       res.send(`
//     <h1>404 Page Not Found</h1>
// `)   
  })
  module.exports=notfound