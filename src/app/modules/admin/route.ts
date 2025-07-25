import { Router } from "express";
import { AdminController } from "./controller";

const router = Router();

router.get("/", AdminController.getAllAdmin);
router.get("/:id", AdminController.getSingleAdmin);
router.patch("/:id", AdminController.updateAdmin);
router.delete("/:id", AdminController.deletedAdmin);

export const AdminRoute = router;
