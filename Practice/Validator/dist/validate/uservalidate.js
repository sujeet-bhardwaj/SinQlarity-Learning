"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registervalidator = void 0;
const express_validator_1 = require("express-validator");
exports.registervalidator = [
    (0, express_validator_1.body)('name').notEmpty().isLength({ min: 4 }).withMessage("name must be 4 characteres").custom((value) => {
        console.log("Name entered:", value);
        if (value !== value.toUpperCase()) {
            throw new Error('Name must be in uppercase');
        }
        return true;
    }),
    (0, express_validator_1.body)('email').isEmail().withMessage('email is required'),
    (0, express_validator_1.body)('password').isLength({ min: 7 }).withMessage("password is 7 digit ")
];
