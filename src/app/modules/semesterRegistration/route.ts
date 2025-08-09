import { Router } from "express";
import { SemesterRegistrationController } from "./controller";

const router = Router();

router.get(
  "/create-semester-registration",
  SemesterRegistrationController.createSemesterRegistration
);
router.get("/", SemesterRegistrationController.getAllSemesterRegistration);
router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistration
);
router.patch("/:id", SemesterRegistrationController.updateSemesterRegistration);
router.delete(
  "/:id",
  SemesterRegistrationController.deleteSemesterRegistration
);

export const SemesterRegistrationRouter = router;
