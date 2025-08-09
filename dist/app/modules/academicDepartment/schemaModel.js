"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentModel = void 0;
const mongoose_1 = require("mongoose");
const academicDepartmentSchema = new mongoose_1.Schema({});
exports.AcademicDepartmentModel = (0, mongoose_1.model)("AcademicDepartment", academicDepartmentSchema);
