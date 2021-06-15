import { RequestHandler } from "express";
import { data } from "../data";

const speakers = data.filter((product) => product.category === "speakers");

export const getSpeakers: RequestHandler = (req, res, next) => {
  res.status(200).send(speakers);
};

export const getSpeakerSet: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const id = req.params.id;
  console.log("id", id);
  const set = speakers.find((product) => product.id === id);

  if (set) {
    return res.status(200).send(set);
  }
  return res.status(404).send({ message: "product was not found" });
};
