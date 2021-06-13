"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeakerSet = exports.getSpeakers = void 0;
const data_1 = require("../data");
const speakers = data_1.data.filter((product) => product.category === "speakers");
const getSpeakers = (req, res, next) => {
    res.status(200).send(speakers);
};
exports.getSpeakers = getSpeakers;
const getSpeakerSet = (req, res, next) => {
    const id = +req.params.id;
    const set = speakers.find((product) => product.id === id);
    if (set) {
        return res.status(200).send(set);
    }
    return res.status(404).send({ message: "product was not found" });
};
exports.getSpeakerSet = getSpeakerSet;
