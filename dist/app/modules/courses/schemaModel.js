"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModel = void 0;
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    prefix: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        enum: ["01", "02", "03", "04"],
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean,
    },
    preRequisite: {
        type: Boolean,
    },
}, {
    timestamps: true,
});
exports.CourseModel = (0, mongoose_1.model)("Course", courseSchema);
