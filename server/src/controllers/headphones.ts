import { RequestHandler } from "express";
import { data } from "../data";

export const getHeadphones: RequestHandler = (req, res, next) => {
  const headphones = data.filter(
    (product) => product.category === "headphones"
  );
  res.status(200).send(headphones);
};

export const getHeadphoneSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
};
