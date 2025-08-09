"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationModel = void 0;
const mongoose_1 = require("mongoose");
const semesterRegistrationSchema = new mongoose_1.Schema({});
exports.SemesterRegistrationModel = (0, mongoose_1.model)("SemesterRegistration", semesterRegistrationSchema);
