import { Router } from "express";
import {
  getDisciplineCases,
  getDisciplineCaseById,
  createDisciplineCase,
  updateDisciplineCase,
  deleteDisciplineCase,
  restoreDisciplineCase,
} from "../controllers/discipline.controller";
import { Role } from "../../generated/prisma/enums";
import { authenticate } from "../middlewares/auth.middleware";
import { security } from "../middlewares/security.middleware";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.use(security, authenticate);

router.get("/", getDisciplineCases);
router.get("/:id", getDisciplineCaseById);
router.post(
  "/",
  authorize(
    Role.main_monitor,
    Role.assistant_monitor,
    Role.discipline_leader
  ),
  createDisciplineCase
);
router.patch(
  "/:id",
  authorize(
    Role.main_monitor,
    Role.assistant_monitor,
    Role.discipline_leader
  ),
  updateDisciplineCase
);
router.patch(
  "/:id/restore",
  authorize(
    Role.main_monitor,
    Role.assistant_monitor,
    Role.discipline_leader
  ),
  restoreDisciplineCase
);
router.delete(
  "/:id",
  authorize(
    Role.main_monitor,
    Role.assistant_monitor,
    Role.discipline_leader
  ),
  deleteDisciplineCase
);

export default router;
