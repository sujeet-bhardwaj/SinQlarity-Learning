"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controller/user");
const express_validator_1 = require("express-validator");
const uservalidate_1 = require("../validate/uservalidate");
const router = (0, express_1.Router)();
router.get("/user", user_1.userdata);
console.log(uservalidate_1.registervalidator);
router.post("/userpost", uservalidate_1.registervalidator, 
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
(req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    console.log(errors);
    console.log(typeof errors);
    if (!errors.isEmpty()) {
        return res.send("error occured ");
    }
    res.send("user registered");
});
exports.default = router;
