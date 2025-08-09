"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentValidationSchema = exports.createStudentValidationSchema = void 0;
const zod_1 = require("zod");
// Name schema
const nameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
});
// Guardian schema
const guardianSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Guardian name is required"),
    relation: zod_1.z.string().min(1, "Relation is required"),
    occupation: zod_1.z.string().min(1, "Occupation is required"),
});
// Student schema
exports.createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().min(1, "ID is required"),
        user: zod_1.z.string(),
        name: nameSchema,
        gender: zod_1.z.enum(["male", "female", "other"]),
        dateOfBirth: zod_1.z.string().min(1, "Date of birth is required"),
        email: zod_1.z.string(),
        contactNo: zod_1.z.string().min(1, "Contact number is required"),
        presentAddress: zod_1.z.string().min(1, "Present address is required"),
        permanentAddress: zod_1.z.string().min(1, "Permanent address is required"),
        guardian: guardianSchema,
        localGuardian: guardianSchema,
        profileImg: zod_1.z.string(),
    }),
});
//for update
// Name schema
const updateNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required").optional(),
    lastName: zod_1.z.string().min(1, "Last name is required").optional(),
});
// Guardian schema
const updateGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Guardian name is required").optional(),
    relation: zod_1.z.string().min(1, "Relation is required").optional(),
    occupation: zod_1.z.string().min(1, "Occupation is required").optional(),
});
exports.updateStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().min(1, "ID is required").optional(),
        user: zod_1.z.string().optional(),
        name: updateNameSchema,
        gender: zod_1.z.enum(["male", "female", "other"]).optional(),
        dateOfBirth: zod_1.z.string().min(1, "Date of birth is required").optional(),
        email: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().min(1, "Contact number is required").optional(),
        presentAddress: zod_1.z.string().min(1, "Present address is required").optional(),
        permanentAddress: zod_1.z
            .string()
            .min(1, "Permanent address is required")
            .optional(),
        guardian: updateGuardianSchema,
        localGuardian: updateGuardianSchema,
        profileImg: zod_1.z.string().optional(),
    }),
});
