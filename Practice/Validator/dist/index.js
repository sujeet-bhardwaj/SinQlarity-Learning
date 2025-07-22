"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routers/user")); // Correct relative path
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Required to parse JSON request bodies
app.use("/", user_1.default); // All routes defined in router
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
