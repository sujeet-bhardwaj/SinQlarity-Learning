import { Router, Request, Response } from 'express';
import {userdata} from '../controller/user';
import { body, validationResult } from 'express-validator';

import {registervalidator} from '../validate/uservalidate'
const router = Router();

router.get("/user",userdata)
 router.post("/userpost",registervalidator,
    //[
//     body('name')
//       .notEmpty().withMessage('name is required')
//       .isLength({ min: 3 }).withMessage('name at least 3 characters'),
//     body('email')
//       .isEmail().withMessage('please provide a valid email'),
//     body('password')
//       .isLength({ min: 6 }).withMessage('password must be at least 6 characters')
//       .isString().withMessage('string is allowed ')
//   ]
(req: Request, res: Response) => {
      const errors = validationResult(req);
      console.log(errors)
      console.log(typeof errors)
    if(!errors.isEmpty()){
      return res.send ("error occured ");
    }
   res.send("user registered")
});

export default router;


