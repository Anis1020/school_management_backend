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
exports.AcademicSemesterController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const services_1 = require("./services");
const createAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.AcademicSemesterServices.createAcademicSemesterIntoDB(req.body);
    res.status(200).json({
        success: true,
        message: "Create AcademicSemester successfully",
        data: result,
    });
}));
const getAllAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.AcademicSemesterServices.getAllAcademicSemesterFromDB(req.query);
    res.status(200).json({
        success: true,
        message: "get all AcademicSemester successfully",
        data: result,
    });
}));
const getSingleAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicSemesterServices.getSingleAcademicSemesterFromDB(id);
    res.status(200).json({
        success: true,
        message: "get all AcademicSemester successfully",
        data: result,
    });
}));
const updateAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicSemesterServices.updateAcademicSemesterFromDB(id, req.body);
    res.status(200).json({
        success: true,
        message: "get all AcademicSemester successfully",
        data: result,
    });
}));
const deleteAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield services_1.AcademicSemesterServices.deleteAcademicSemesterFromDB(id);
    res.status(200).json({
        success: true,
        message: "get all AcademicSemester successfully",
        data: result,
    });
}));
exports.AcademicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester,
    deleteAcademicSemester,
};
