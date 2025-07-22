import { Router } from "express";
import { SemesterController } from "./controller";

const router = Router();

router.post("/create-semester", SemesterController.createSemester);
router.get("/", SemesterController.getAllSemester);
export const SemesterRouter = router;
