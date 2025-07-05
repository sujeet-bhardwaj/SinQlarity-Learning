const express=require('express')
const router=express.Router()
const controllerroute=require('../controller/user')
// register 
router.post('/register',controllerroute.register)
// get 
router.post('/get',controllerroute.get)
// update
router.post('/update',controllerroute.update)

// delete 
router.post('/delete',controllerroute.delete)


 

module.exports=router