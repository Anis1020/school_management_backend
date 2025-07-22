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
exports.generatedID = void 0;
const schemaModel_1 = require("./schemaModel");
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield schemaModel_1.UserModel.findOne({
        role: "student",
    }, { id: 1, _id: 0 }).sort({
        createdAt: -1,
    });
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent.id : undefined;
});
const generatedID = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastStudentId = yield findLastStudentId();
    const lastStudentSemesterCode = lastStudentId
        ? lastStudentId.substring(4, 6)
        : "";
    const lastStudentSemesterYear = lastStudentId
        ? lastStudentId.substring(0, 4)
        : "";
    const currentSemesterCode = payload.code;
    const currentSemesterYear = payload.year;
    if (lastStudentId &&
        lastStudentSemesterCode === currentSemesterCode &&
        lastStudentSemesterYear === currentSemesterYear) {
        currentId = lastStudentId.substring(6);
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
});
exports.generatedID = generatedID;
