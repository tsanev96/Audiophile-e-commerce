"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadphoneSet = exports.getHeadphones = void 0;
const data_1 = require("../data");
const getHeadphones = (req, res, next) => {
    const headphones = data_1.data.filter((product) => product.category === "headphones");
    res.status(200).send(headphones);
};
exports.getHeadphones = getHeadphones;
const getHeadphoneSet = (req, res, next) => {
    const id = req.params.id;
};
exports.getHeadphoneSet = getHeadphoneSet;
