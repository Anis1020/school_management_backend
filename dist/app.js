"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalError_1 = __importDefault(require("./app/errors/globalError"));
const notFound_1 = __importDefault(require("./app/errors/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", routes_1.default);
//global error handler
app.use(globalError_1.default);
//not found route handler
app.use(notFound_1.default);
exports.default = app;
