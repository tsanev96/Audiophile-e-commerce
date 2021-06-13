"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeakerSet = exports.getSpeakers = void 0;
const data_1 = require("../data");
const getSpeakers = (req, res, next) => {
    const speakers = data_1.data.filter((product) => product.category === "speakers");
    res.status(200).send(speakers);
};
exports.getSpeakers = getSpeakers;
const getSpeakerSet = (req, res, next) => {
    const id = req.params.id;
};
exports.getSpeakerSet = getSpeakerSet;
