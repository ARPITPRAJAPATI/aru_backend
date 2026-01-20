import { Router } from "express";
import { registerUSER } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", registerUSER);

export { router };   // 👈 named export ONLY
