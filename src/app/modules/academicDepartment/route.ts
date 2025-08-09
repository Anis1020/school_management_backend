import { Router } from "express";
import { AcademicDepartmentController } from "./controller";

const router = Router();

router.get(
  "/create-academic-department",
  AcademicDepartmentController.createAcademicDepartment
);
router.get("/", AcademicDepartmentController.getAllAcademicDepartment);
router.get("/:id", AcademicDepartmentController.getSingleAcademicDepartment);
router.patch("/:id", AcademicDepartmentController.updateAcademicDepartment);
router.delete("/:id", AcademicDepartmentController.deleteAcademicDepartment);

export const AcademicDepartmentRouter = router;
