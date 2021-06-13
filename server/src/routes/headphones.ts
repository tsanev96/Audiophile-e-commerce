import { Router } from "express";
import { getHeadphones } from "../controllers/headphones";

const router = Router();

router.get("/", getHeadphones);

export default router;
