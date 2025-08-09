import { Router } from "express";
import { CourseController } from "./controller";

const router = Router();

router.get("/create-course", CourseController.createCourse);
router.get("/", CourseController.getAllCourse);
router.get("/:id", CourseController.getSingleCourse);
router.patch("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);

export const CourseRouter = router;
