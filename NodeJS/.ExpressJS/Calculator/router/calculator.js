  const express=require('express')
   const router=express.Router()
//    console.log(typeof router)
   const calccontroller=require('../controller/calculator')
   console.log(typeof calccontroller)
router.post("/add",calccontroller.add)
router.post("/sub",calccontroller.sub)
router.post("/mul",calccontroller.mul)
router.post("/div",calccontroller.div)


module.exports=router;
