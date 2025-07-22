"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyModel = void 0;
const mongoose_1 = require("mongoose");
const NameSchema = {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
};
const GuardianSchema = {
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
};
const LocalGuardianSchema = {
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
};
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: NameSchema,
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    presentAddress: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },
    guardian: GuardianSchema,
    localGuardian: LocalGuardianSchema,
    profileImg: {
        type: String,
        required: true,
    },
    academicSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    academicDepartment: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
});
exports.FacultyModel = (0, mongoose_1.model)("Faculty", studentSchema);
