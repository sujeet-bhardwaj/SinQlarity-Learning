import {body} from 'express-validator'

export const registervalidator=[
body('name').notEmpty().withMessage('name is required').isLength({min:4}).withMessage("name must be 4 characteres").custom((value) => {
      console.log("Name entered:", value);  
      if (value !== value.toUpperCase()) {
        throw new Error('Name must be in uppercase');
      }
      return true; 
    }),
body('email').isEmail().withMessage('email is required'),
body('password').isLength({min:7}).withMessage("password is 7 digit ")
]
