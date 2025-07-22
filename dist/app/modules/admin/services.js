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
exports.AdminServices = void 0;
const schemaModel_1 = require("../user/schemaModel");
const schemaModel_2 = require("./schemaModel");
const getAllAdminFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_2.AdminModel.find();
    return result;
});
const getSingleAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_2.AdminModel.findOne({ id });
    return result;
});
const updateAdminFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schemaModel_2.AdminModel.findOneAndUpdate({ id }, payload, {
        new: true,
    });
    return result;
});
const deletedAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield schemaModel_1.UserModel.deleteOne({ id });
    const deleteAdmin = yield schemaModel_2.AdminModel.deleteOne({ id });
    return {
        deleteUser,
        deleteAdmin,
    };
});
exports.AdminServices = {
    getAllAdminFromDB,
    getSingleAdminFromDB,
    updateAdminFromDB,
    deletedAdminFromDB,
};
