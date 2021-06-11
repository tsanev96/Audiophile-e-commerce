"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const headphones_1 = __importDefault(require("./routes/headphones"));
const app = express_1.default();
app.use("/headphones", headphones_1.default);
// middleware handle errors
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, () => console.log("listening on port 3000"));
