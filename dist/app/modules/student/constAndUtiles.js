"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameSchema = void 0;
exports.NameSchema = {
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
};
