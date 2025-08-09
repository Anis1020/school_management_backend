"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createAcademicDepartmentValidationSchema = zod_1.default.object({});
const updateAcademicDepartmentValidationSchema = zod_1.default.object({});
exports.AcademicDepartmentValidations = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema,
};
