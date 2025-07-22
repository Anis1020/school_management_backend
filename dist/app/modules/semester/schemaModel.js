"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterModel = void 0;
const mongoose_1 = require("mongoose");
const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const semesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        enum: ["01", "02", "03"],
        required: true,
    },
    startMonth: {
        type: String,
        enum: Months,
        required: true,
    },
    endMonth: {
        type: String,
        enum: Months,
        required: true,
    },
}, {
    timestamps: true,
});
exports.SemesterModel = (0, mongoose_1.model)("Semester", semesterSchema);
