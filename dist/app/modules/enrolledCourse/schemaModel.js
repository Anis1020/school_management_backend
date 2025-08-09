"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrolledCourseModel = void 0;
const mongoose_1 = require("mongoose");
const enrolledCourseSchema = new mongoose_1.Schema({});
exports.EnrolledCourseModel = (0, mongoose_1.model)("EnrolledCourse", enrolledCourseSchema);
