import { Router } from "express";
import {
  createSession,
  getSessions,
  updateSession,
  deleteSession,
} from "../controllers/classSession.controller";
import { auth } from "../middlewares/auth.middleware";
import { requireRole } from "../middlewares/role.middleware";
import { validateClassSession } from "../middlewares/validate.middleware";

const router = Router();


export default router;
