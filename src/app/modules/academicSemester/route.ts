import { Router } from "express";
import { AcademicSemesterController } from "./controller";

const router = Router();

router.get(
  "/create-academic-semester",
  AcademicSemesterController.createAcademicSemester
);
router.get("/", AcademicSemesterController.getAllAcademicSemester);
router.get("/:id", AcademicSemesterController.getSingleAcademicSemester);
router.patch("/:id", AcademicSemesterController.updateAcademicSemester);
router.delete("/:id", AcademicSemesterController.deleteAcademicSemester);

export const AcademicSemesterRouter = router;
