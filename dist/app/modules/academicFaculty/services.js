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
exports.AcademicFacultyServices = void 0;
const schemaModel_1 = require("./schemaModel");
const createAcademicFacultyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.AcademicFacultyModel.create(payload);
    return result;
});
const getAllAcademicFacultyFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.AcademicFacultyModel.findByIdAndUpdate(query);
    return result;
});
const getSingleAcademicFacultyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.AcademicFacultyModel.findByIdAndUpdate(id);
    return result;
});
const updateAcademicFacultyFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.AcademicFacultyModel.findByIdAndUpdate(id);
    return result;
});
const deleteAcademicFacultyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_1.AcademicFacultyModel.findByIdAndUpdate(id);
    return result;
});
exports.AcademicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyFromDB,
    deleteAcademicFacultyFromDB,
};
