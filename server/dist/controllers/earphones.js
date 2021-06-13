"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEarphonesSet = exports.getEarphones = void 0;
const data_1 = require("../data");
const getEarphones = (req, res, next) => {
    const earphones = data_1.data.filter((product) => product.category === "earphones");
    res.status(200).send(earphones);
};
exports.getEarphones = getEarphones;
const getEarphonesSet = (req, res, next) => {
    const id = req.params.id;
};
exports.getEarphonesSet = getEarphonesSet;
