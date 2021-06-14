"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadphoneSet = exports.getHeadphones = void 0;
const data_1 = require("../data");
const headphones = data_1.data.filter((product) => product.category === "headphones");
const getHeadphones = (req, res, next) => {
    res.status(200).send(headphones);
};
exports.getHeadphones = getHeadphones;
const getHeadphoneSet = (req, res, next) => {
    const id = req.params.id;
    const set = headphones.find((product) => product.id === id);
    if (set) {
        return res.status(200).send(set);
    }
    return res.status(404).send({ message: "product was not found" });
};
exports.getHeadphoneSet = getHeadphoneSet;
