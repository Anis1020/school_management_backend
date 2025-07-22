"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaModel_1 = require("../admin/schemaModel");
const schemaModel_2 = require("../faculty/schemaModel");
const schemaModel_3 = require("../student/schemaModel");
const schemaModel_4 = require("./schemaModel");
const schemaModel_5 = require("../semester/schemaModel");
const user_utils_1 = require("./user.utils");
// import { UserModel } from "./schemaModel";
const createStudentIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    const admissionSemester = yield schemaModel_5.SemesterModel.findById(payload.academicSemester); //, {}, { session }
    if (!admissionSemester) {
        throw new Error("Admission semester not found");
    }
    try {
        const userData = {};
        userData.password = password || "pass123";
        userData.role = "student";
        userData.id = (yield (0, user_utils_1.generatedID)(admissionSemester)) || "student1"; // Use payload.id if available, or generate one
        const newUser = yield schemaModel_4.UserModel.create([userData], { session });
        payload.id = newUser[0].id;
        // Only assign payload.user if your schema supports it
        payload.user = newUser[0]._id;
        const newStudent = yield schemaModel_3.StudentModel.create([payload], { session });
        yield session.commitTransaction();
        session.endSession();
        return newStudent[0];
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw new Error("fail to create user and student: " + error.message);
    }
});
//create faculty
const createFacultyIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = password || "faculty123";
    userData.role = "faculty";
    userData.id = "faculty1";
    const newUser = yield schemaModel_4.UserModel.create(userData);
    payload.id = newUser.id;
    payload.user = newUser._id;
    // payload.email=newUser.email
    const result = yield schemaModel_2.FacultyModel.create(payload);
    return result;
});
//create admin
const createAdminIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = password || "admin123";
    userData.role = "admin";
    userData.id = "admin1";
    const newUser = yield schemaModel_4.UserModel.create(userData);
    payload.id = newUser.id;
    payload.user = newUser._id;
    // payload.email=newUser.email
    const result = yield schemaModel_1.AdminModel.create(payload);
    return result;
});
exports.UserServices = {
    createStudentIntoDB,
    createFacultyIntoDB,
    createAdminIntoDB,
};
