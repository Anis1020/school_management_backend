"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoute = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.post("/create-academic-faculty", controller_1.AcademicFacultyCollections.createAcademicFaculty);
exports.AcademicFacultyRoute = router;
