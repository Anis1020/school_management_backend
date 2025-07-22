import { Router } from "express";
import { AcademicFacultyCollections } from "./controller";

const router = Router();

router.post(
  "/create-academic-faculty",
  AcademicFacultyCollections.createAcademicFaculty
);
export const AcademicFacultyRoute = router;
