import { Router } from "express";
import { signup, login } from "../controllers/auth.controller";
import { validateRegister } from "../middlewares/validate.middleware";

const router = Router();



export default router;
