import { Router } from "express";
import { DepartmentController } from "./controller";

const router = Router();

router.post("/create-department", DepartmentController.createDepartment);

export const DEpartmentRouter = router;
