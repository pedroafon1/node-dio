import { Router } from "express";
import { getPlayer } from "./controllers/players-controller";

const router = Router();

router.get("/api", getPlayer);

export default router;