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
const config_1 = __importDefault(require("../../config"));
const schemaModel_1 = require("./schemaModel");
const schemaModel_2 = require("../student/schemaModel");
const schemaModel_3 = require("../faculty/schemaModel");
const createStudentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = config_1.default.default_pass;
    userData.role = "student";
    userData.id = "1234";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = yield schemaModel_1.UserModel.create([userData], { session });
        if (!newUser.length) {
            throw new Error("Fail to create User");
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newStudent = yield schemaModel_2.StudentModel.create([payload], { session });
        yield session.commitTransaction();
        session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error("fail to create student");
    }
});
const createFacultyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.role = "faculty";
    userData.password = config_1.default.default_pass;
    userData.id = "1234";
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const newUser = yield schemaModel_1.UserModel.create([userData], { session });
        if (!newUser) {
            throw new Error("Fail to create User");
        }
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newFaculty = yield schemaModel_3.FacultyModel.create([payload], { session });
        if (!newFaculty) {
            throw new Error("Fail to create Faculty");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newFaculty;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error("fain to create user or faculty");
    }
});
const createAdminIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () { });
exports.UserServices = {
    createStudentIntoDB,
    createFacultyIntoDB,
    createAdminIntoDB,
};
