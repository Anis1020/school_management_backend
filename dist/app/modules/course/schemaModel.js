"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({});
exports.CourseModel = (0, mongoose_1.model)("Course", courseSchema);
