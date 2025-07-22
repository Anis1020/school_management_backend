"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEpartmentRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/create-department", controller_1.DepartmentController.createDepartment);
exports.DEpartmentRouter = router;
