import { Router } from "express";
import { getEarphones } from "../controllers/earphones";

const router = Router();

router.get("/", getEarphones);

export default router;
