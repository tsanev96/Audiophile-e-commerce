"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadphoneSet = exports.getSpeakers = void 0;
const data_1 = require("../data");
const getSpeakers = (req, res, next) => {
    const headphones = data_1.data.filter((product) => product.category === "speakers");
    res.status(200).send(headphones);
};
exports.getSpeakers = getSpeakers;
const getHeadphoneSet = (req, res, next) => {
    const id = req.params.id;
};
exports.getHeadphoneSet = getHeadphoneSet;
