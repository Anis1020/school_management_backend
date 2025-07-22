"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModel = void 0;
const mongoose_1 = require("mongoose");
const departmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "AcademicFaculty",
        required: true,
    },
}, {
    timestamps: true,
});
exports.DepartmentModel = (0, mongoose_1.model)("Department", departmentSchema);
