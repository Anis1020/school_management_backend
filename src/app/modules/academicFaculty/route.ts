import { Router } from "express";
import { AcademicFacultyController } from "./controller";

const router = Router();

router.get(
  "/create-academic-faculty",
  AcademicFacultyController.createAcademicFaculty
);
router.get("/", AcademicFacultyController.getAllAcademicFaculty);
router.get("/:id", AcademicFacultyController.getSingleAcademicFaculty);
router.patch("/:id", AcademicFacultyController.updateAcademicFaculty);
router.delete("/:id", AcademicFacultyController.deleteAcademicFaculty);

export const AcademicFacultyRouter = router;
