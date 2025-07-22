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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const schemaModel_1 = require("../admin/schemaModel");
const schemaModel_2 = require("../faculty/schemaModel");
const schemaModel_3 = require("../student/schemaModel");
const schemaModel_4 = require("./schemaModel");
// import { UserModel } from "./schemaModel";
const createStudentIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = password || "pass123";
    userData.role = "student";
    userData.id = "student1";
    const newUser = yield schemaModel_4.UserModel.create(userData);
    payload.id = newUser.id;
    payload.user = newUser._id;
    // payload.email=newUser.email
    const result = yield schemaModel_3.StudentModel.create(payload);
    return result;
});
//TODO
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
