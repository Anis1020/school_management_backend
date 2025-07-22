"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/create-semester", controller_1.SemesterController.createSemester);
router.get("/", controller_1.SemesterController.getAllSemester);
exports.SemesterRouter = router;
