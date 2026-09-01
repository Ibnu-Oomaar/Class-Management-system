import { Router } from "express";
import {
  getAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
  restoreAchievement,
} from "../controllers/achievement.controller";
import { Role } from "@prisma/client";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getAchievements);
router.get("/:id", getAchievementById);
router.post(
  "/",
  authorize(Role.main_monitor, Role.assistant_monitor),
  createAchievement
);
router.patch(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  updateAchievement
);
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor, Role.assistant_monitor),
  restoreAchievement
);
router.delete(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  deleteAchievement
);

export default router;
