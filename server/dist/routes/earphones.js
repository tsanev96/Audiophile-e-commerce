"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const earphones_1 = require("../controllers/earphones");
const router = express_1.Router();
router.get("/", earphones_1.getEarphones);
router.get("/:id", earphones_1.getEarphonesSet);
exports.default = router;
