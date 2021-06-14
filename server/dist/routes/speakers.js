"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const speakers_1 = require("../controllers/speakers");
const router = express_1.Router();
router.get("/", speakers_1.getSpeakers);
router.get("/:id", speakers_1.getSpeakerSet);
exports.default = router;
