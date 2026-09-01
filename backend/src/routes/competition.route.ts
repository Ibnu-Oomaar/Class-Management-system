import { Router } from "express";
import {
  getCompetitions,
  getCompetitionById,
  createCompetition,
  updateCompetition,
  deleteCompetition,
  restoreCompetition,
} from "../controllers/competition.controller";
import { Role } from "../../generated/prisma";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getCompetitions);
router.get("/:id", getCompetitionById);
router.post(
  "/",
  authorize(Role.main_monitor, Role.sports_leader),
  createCompetition
);
router.patch(
  "/:id",
  authorize(Role.main_monitor, Role.sports_leader),
  updateCompetition
);
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor, Role.sports_leader),
  restoreCompetition
);
router.delete(
  "/:id",
  authorize(Role.main_monitor, Role.sports_leader),
  deleteCompetition
);

export default router;
