import { Router } from "express";
import { getHeadphones, getHeadphoneSet } from "../controllers/headphones";

const router = Router();

router.get("/", getHeadphones);

router.get("/:id", getHeadphoneSet);

export default router;
