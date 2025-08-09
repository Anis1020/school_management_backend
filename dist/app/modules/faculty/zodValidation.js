"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createFacultyValidationSchema = zod_1.default.object({});
const updateFacultyValidationSchema = zod_1.default.object({});
exports.FacultyValidations = {
    createFacultyValidationSchema,
    updateFacultyValidationSchema,
};
