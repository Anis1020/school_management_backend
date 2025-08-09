"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyValidations = void 0;
const zod_1 = __importDefault(require("zod"));
// Name schema
const nameSchema = zod_1.default.object({
    firstName: zod_1.default.string().min(1, "First name is required"),
    lastName: zod_1.default.string().min(1, "Last name is required"),
});
// Guardian schema
const guardianSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, "Guardian name is required"),
    relation: zod_1.default.string().min(1, "Relation is required"),
    occupation: zod_1.default.string().min(1, "Occupation is required"),
});
const createFacultyValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        id: zod_1.default.string().min(1, "ID is required"),
        user: zod_1.default.string(),
        name: nameSchema,
        designation: zod_1.default.string(),
        gender: zod_1.default.enum(["male", "female", "other"]),
        dateOfBirth: zod_1.default.string().min(1, "Date of birth is required"),
        email: zod_1.default.string(),
        contactNo: zod_1.default.string().min(1, "Contact number is required"),
        presentAddress: zod_1.default.string().min(1, "Present address is required"),
        permanentAddress: zod_1.default.string().min(1, "Permanent address is required"),
        guardian: guardianSchema,
        localGuardian: guardianSchema,
        profileImg: zod_1.default.string(),
    }),
});
// for update
// Name schema
const updateNameSchema = zod_1.default.object({
    firstName: zod_1.default.string().min(1, "First name is required").optional(),
    lastName: zod_1.default.string().min(1, "Last name is required").optional(),
});
// Guardian schema
const updateGuardianSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, "Guardian name is required").optional(),
    relation: zod_1.default.string().min(1, "Relation is required").optional(),
    occupation: zod_1.default.string().min(1, "Occupation is required").optional(),
});
const updateFacultyValidationSchema = zod_1.default.object({
    body: zod_1.default.object({
        id: zod_1.default.string().min(1, "ID is required").optional(),
        user: zod_1.default.string().optional(),
        name: updateNameSchema,
        designation: zod_1.default.string().optional(),
        gender: zod_1.default.enum(["male", "female", "other"]).optional(),
        dateOfBirth: zod_1.default.string().min(1, "Date of birth is required").optional(),
        email: zod_1.default.string().optional(),
        contactNo: zod_1.default.string().min(1, "Contact number is required").optional(),
        presentAddress: zod_1.default.string().min(1, "Present address is required").optional(),
        permanentAddress: zod_1.default
            .string()
            .min(1, "Permanent address is required")
            .optional(),
        guardian: updateGuardianSchema,
        localGuardian: updateGuardianSchema,
        profileImg: zod_1.default.string().optional(),
    }),
});
exports.FacultyValidations = {
    createFacultyValidationSchema,
    updateFacultyValidationSchema,
};
