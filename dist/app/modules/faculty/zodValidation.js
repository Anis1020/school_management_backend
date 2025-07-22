"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createStudentValidation = zod_1.default.object({
    body: zod_1.default.object({
        id: zod_1.default.string(),
        user: zod_1.default.string(),
        name: zod_1.default.string(),
        gender: zod_1.default.enum(["male", "female", "other"]),
        dateOfBirth: zod_1.default.string(),
        email: zod_1.default.string(),
        contactNo: zod_1.default.string(),
        presentAddress: zod_1.default.string(),
        permanentAddress: zod_1.default.string(),
        guardian: zod_1.default.string(),
        localGuardian: zod_1.default.string(),
        profileImg: zod_1.default.string(),
        academicSemester: zod_1.default.string(),
        academicDepartment: zod_1.default.string(),
    }),
});
exports.studentValidations = {
    createStudentValidation,
};
