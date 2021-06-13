import { RequestHandler } from "express";
import { data } from "../data";

const earphones = data.filter((product) => product.category === "earphones");

export const getEarphones: RequestHandler = (req, res, next) => {
  res.status(200).send(earphones);
};

export const getEarphonesSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = +req.params.id;
  const set = earphones.find((product) => product.id === id);

  if (set) {
    return res.status(200).send(set);
  }
  return res.status(404).send({ message: "product was not found" });
};
