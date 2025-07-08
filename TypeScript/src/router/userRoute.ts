import express from 'express'
import  {register,UpdateuserData} from '../controller/UserController'
const router=express.Router()

router.post("/register",register)
router.post("/update",UpdateuserData)
export default router;