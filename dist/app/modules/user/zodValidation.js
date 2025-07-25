"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createUserValidation = zod_1.default.object({
    body: zod_1.default.object({
        password: zod_1.default.string(),
    }),
});
exports.UserValidations = {
    createUserValidation,
};
