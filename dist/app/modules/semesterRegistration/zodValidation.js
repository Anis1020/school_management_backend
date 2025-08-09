"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createSemesterRegistrationValidationSchema = zod_1.default.object({});
const updateSemesterRegistrationValidationSchema = zod_1.default.object({});
exports.AcademicSemesterValidations = {
    createSemesterRegistrationValidationSchema,
    updateSemesterRegistrationValidationSchema,
};
