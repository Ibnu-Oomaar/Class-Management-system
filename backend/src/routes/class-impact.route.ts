import { Router } from "express";
import {
  getClassImpacts,
  getClassImpactById,
  createClassImpact,
  updateClassImpact,
  deleteClassImpact,
  restoreClassImpact,
} from "../controllers/class-impact.controller";
import { Role } from "../../generated/prisma";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getClassImpacts);
router.get("/:id", getClassImpactById);
router.post(
  "/",
  authorize(Role.main_monitor, Role.assistant_monitor),
  createClassImpact
);
router.patch(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  updateClassImpact
);
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor, Role.assistant_monitor),
  restoreClassImpact
);
router.delete(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  deleteClassImpact
);

export default router;
