import { RequestHandler } from "express";

export const getHeadphones: RequestHandler = (req, res, next) => {
  res.status(201).send([1, 2, 3, 4]);
};

export const getHeadphoneSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
};
