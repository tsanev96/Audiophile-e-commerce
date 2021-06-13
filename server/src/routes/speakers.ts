import { Router } from "express";
import { getSpeakers } from "../controllers/speakers";

const router = Router();

router.get("/", getSpeakers);

export default router;
