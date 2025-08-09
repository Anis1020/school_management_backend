"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createStudentValidationSchema = zod_1.default.object({});
const updateStudentValidationSchema = zod_1.default.object({});
exports.StudentValidations = {
    createStudentValidationSchema,
    updateStudentValidationSchema,
};
