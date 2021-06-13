import { RequestHandler } from "express";
import { data } from "../data";

export const getEarphones: RequestHandler = (req, res, next) => {
  const earphones = data.filter((product) => product.category === "earphones");
  res.status(200).send(earphones);
};

export const getEarphonesSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
};
