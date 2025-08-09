import { Router } from "express";
import { OfferedCourseController } from "./controller";

const router = Router();

router.get(
  "/create-offered-course",
  OfferedCourseController.createOfferedCourse
);
router.get("/", OfferedCourseController.getAllOfferedCourse);
router.get("/:id", OfferedCourseController.getSingleOfferedCourse);
router.patch("/:id", OfferedCourseController.updateOfferedCourse);
router.delete("/:id", OfferedCourseController.deleteOfferedCourse);

export const OfferedCourseRouter = router;
