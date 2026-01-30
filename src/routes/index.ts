import { Router } from "express";
import showHomePage from "../controllers";

const router = Router();

router.get("/", showHomePage);

export default router;
