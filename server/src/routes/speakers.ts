import { Router } from "express";
import { getSpeakers, getSpeakerSet } from "../controllers/speakers";

const router = Router();

router.get("/", getSpeakers);

router.get("/:id", getSpeakerSet);

export default router;
