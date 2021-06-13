"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const headphones_1 = __importDefault(require("./routes/headphones"));
const speakers_1 = __importDefault(require("./routes/speakers"));
const earphones_1 = __importDefault(require("./routes/earphones"));
const routerRoutes = express_1.default();
routerRoutes.use("/headphones", headphones_1.default);
routerRoutes.use("/speakers", speakers_1.default);
routerRoutes.use("/earphones", earphones_1.default);
exports.default = routerRoutes;
