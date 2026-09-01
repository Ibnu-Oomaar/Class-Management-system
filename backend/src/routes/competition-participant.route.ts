import { Router } from "express";
import {
  getCompetitionParticipants,
  getCompetitionParticipantById,
  createCompetitionParticipant,
  updateCompetitionParticipant,
  deleteCompetitionParticipant,
  restoreCompetitionParticipant,
} from "../controllers/competition-participant.controller";
import { Role } from "@prisma/client";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getCompetitionParticipants);
router.get("/:id", getCompetitionParticipantById);
router.post(
  "/",
  authorize(Role.main_monitor, Role.sports_leader),
  createCompetitionParticipant
);
router.patch(
  "/:id",
  authorize(Role.main_monitor, Role.sports_leader),
  updateCompetitionParticipant
);
router.patch(
  "/:id/restore",
  authorize(Role.main_monitor, Role.sports_leader),
  restoreCompetitionParticipant
);
router.delete(
  "/:id",
  authorize(Role.main_monitor, Role.sports_leader),
  deleteCompetitionParticipant
);

export default router;
