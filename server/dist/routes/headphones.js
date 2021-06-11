"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const headphones_1 = require("../controllers/headphones");
const router = express_1.Router();
router.get("/", headphones_1.getHeadphones);
// router.get("/:id", (req, res, next) => {});
exports.default = router;
