"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadphoneSet = exports.getHeadphones = void 0;
const getHeadphones = (req, res, next) => {
    res.status(201).send([1, 2, 3, 4]);
};
exports.getHeadphones = getHeadphones;
const getHeadphoneSet = (req, res, next) => {
    const id = req.params.id;
};
exports.getHeadphoneSet = getHeadphoneSet;
