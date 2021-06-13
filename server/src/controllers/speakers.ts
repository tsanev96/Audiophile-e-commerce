import { RequestHandler } from "express";
import { data } from "../data";

export const getSpeakers: RequestHandler = (req, res, next) => {
  const speakers = data.filter((product) => product.category === "speakers");
  res.status(200).send(speakers);
};

export const getSpeakerSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
};
