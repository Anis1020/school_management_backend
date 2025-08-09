import { Router } from "express";
import { EnrolledCourseController } from "./controller";

const router = Router();

router.get(
  "/create-enrolled-course",
  EnrolledCourseController.createEnrolledCourse
);
router.get("/", EnrolledCourseController.getAllEnrolledCourse);
router.get("/:id", EnrolledCourseController.getSingleEnrolledCourse);
router.patch("/:id", EnrolledCourseController.updateEnrolledCourse);
router.delete("/:id", EnrolledCourseController.deleteEnrolledCourse);

export const EnrolledCourseRouter = router;
