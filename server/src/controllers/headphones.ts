import { RequestHandler } from "express";
import { data } from "../data";

const headphones = data.filter((product) => product.category === "headphones");

export const getHeadphones: RequestHandler = (req, res, next) => {
  res.status(200).send(headphones);
};

export const getHeadphoneSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
  const set = headphones.find((product) => product.id === id);

  if (set) {
    return res.status(200).send(set);
  }
  return res.status(404).send({ message: "product was not found" });
};
