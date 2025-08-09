"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createAcademicSemesterValidationSchema = zod_1.default.object({});
const updateAcademicSemesterValidationSchema = zod_1.default.object({});
exports.AcademicSemesterValidations = {
    createAcademicSemesterValidationSchema,
    updateAcademicSemesterValidationSchema,
};
