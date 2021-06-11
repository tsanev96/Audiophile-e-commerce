import { Router } from "express";
import { getHeadphones } from "../controllers/headphones";

const router = Router();

router.get("/", getHeadphones);

// router.get("/:id", (req, res, next) => {});

export default router;
