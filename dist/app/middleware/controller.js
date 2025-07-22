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
exports.StudentController = void 0;
const services_1 = require("../modules/student/services");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const getAllStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.StudentServices.getAllStudentFromDB();
    res.status(200).json({
        success: true,
        message: "All student get successfully",
        data: result,
    });
}));
const getSingleStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
        success: true,
        message: "Single student get successfully",
        data: result,
    });
}));
const updateStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.StudentServices.updateStudentFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "Single student update successfully",
        data: result,
    });
}));
const deletedStudent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.StudentServices.deletedStudentFromDB(id);
    res.status(200).json({
        success: true,
        message: "Single student deleted successfully",
        data: result,
    });
}));
exports.StudentController = {
    getAllStudent,
    getSingleStudent,
    updateStudent,
    deletedStudent,
};
