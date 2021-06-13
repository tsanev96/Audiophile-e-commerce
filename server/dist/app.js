"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerRoutes_1 = __importDefault(require("./routerRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use("/api", routerRoutes_1.default);
// middleware handle errors
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(4000, () => console.log("listening on port 4000"));
