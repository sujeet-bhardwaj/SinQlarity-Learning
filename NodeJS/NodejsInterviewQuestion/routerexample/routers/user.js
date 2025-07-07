 const {getuser,postuser,putuser}=require('../controllers/user')

const express=require('express')

const router=express.Router();

router.get('/',getuser)
router.post('/',postuser)
router.put('/',putuser)

module.exports=router