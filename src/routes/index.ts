import { Router } from "express";
import showHomePage from "../controllers/index.js";

const router = Router();

router.get("/", showHomePage);

export default router;
