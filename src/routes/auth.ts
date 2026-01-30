import { Router } from "express";
import { logIn, signUp, logOut } from "../controllers/auth.js";

const router = Router();

router.post("/login", logIn);
router.post("/logout", logOut);

router.post("/signup", signUp);

export default router;
