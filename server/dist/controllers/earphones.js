"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEarphonesSet = exports.getEarphones = void 0;
const data_1 = require("../data");
const earphones = data_1.data.filter((product) => product.category === "earphones");
const getEarphones = (req, res, next) => {
    res.status(200).send(earphones);
};
exports.getEarphones = getEarphones;
const getEarphonesSet = (req, res, next) => {
    const id = +req.params.id;
    const set = earphones.find((product) => product.id === id);
    if (set) {
        return res.status(200).send(set);
    }
    return res.status(404).send({ message: "product was not found" });
};
exports.getEarphonesSet = getEarphonesSet;
