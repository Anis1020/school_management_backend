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
exports.EnrolledCourseController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const services_1 = require("./services");
const createEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.EnrolledCourseServices.createEnrolledCourseIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Create EnrolledCourse successfully",
        data: result,
    });
}));
const getAllEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.EnrolledCourseServices.getAllEnrolledCourseFromDB(req.query);
    res.status(200).json({
        success: true,
        message: "get all EnrolledCourse successfully",
        data: result,
    });
}));
const getSingleEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.EnrolledCourseServices.getSingleEnrolledCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "get all EnrolledCourse successfully",
        data: result,
    });
}));
const updateEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.EnrolledCourseServices.updateEnrolledCourseFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "get all EnrolledCourse successfully",
        data: result,
    });
}));
const deleteEnrolledCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.EnrolledCourseServices.deleteEnrolledCourseFromDB(id);
    res.status(200).json({
        success: true,
        message: "get all EnrolledCourse successfully",
        data: result,
    });
}));
exports.EnrolledCourseController = {
    createEnrolledCourse,
    getAllEnrolledCourse,
    getSingleEnrolledCourse,
    updateEnrolledCourse,
    deleteEnrolledCourse,
};
