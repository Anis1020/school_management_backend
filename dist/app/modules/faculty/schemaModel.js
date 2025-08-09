"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyModel = void 0;
const mongoose_1 = require("mongoose");
const facultySchema = new mongoose_1.Schema({});
exports.FacultyModel = (0, mongoose_1.model)("Faculty", facultySchema);
