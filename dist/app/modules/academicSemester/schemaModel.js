"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterModel = void 0;
const mongoose_1 = require("mongoose");
const academicSemesterSchema = new mongoose_1.Schema({});
exports.AcademicSemesterModel = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
