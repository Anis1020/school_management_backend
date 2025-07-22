import { Router } from "express";
import { CourseController } from "./controller";

const router = Router();
router.post("/create-course", CourseController.createCourse);

export const CourseRouter = router;
