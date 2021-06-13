import { Router } from "express";
import { getEarphones, getEarphonesSet } from "../controllers/earphones";

const router = Router();

router.get("/", getEarphones);

router.get("/:id", getEarphonesSet);

export default router;
