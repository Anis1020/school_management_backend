import { Router } from "express";
import { StudentController } from "./controller";

const router = Router();

router.get("/", StudentController.getAllStudent);
router.get("/:id", StudentController.getSingleStudent);
router.patch("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deletedStudent);

export const StudentRoute = router;
