import { Router } from "express";
import {
  getClassLeaders,
  getClassLeaderById,
  createClassLeader,
  updateClassLeader,
  deleteClassLeader,
  restoreClassLeader,
} from "../controllers/class-leader.controller";
import { Role } from "../../generated/prisma/enums";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getClassLeaders);
router.get("/:id", getClassLeaderById);
router.post(
  "/",
  authorize(Role.main_monitor, Role.assistant_monitor),
  createClassLeader
);
router.patch(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  updateClassLeader
);
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor, Role.assistant_monitor),
  restoreClassLeader
);
router.delete(
  "/:id",
  authorize(Role.main_monitor, Role.assistant_monitor),
  deleteClassLeader
);

export default router;
