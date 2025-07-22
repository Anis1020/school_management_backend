"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalError = (err, req, res, next) => {
    const statusCode = 500;
    const message = "global error";
    res.status(statusCode).json({
        success: false,
        message,
        err: err.message,
    });
};
exports.default = globalError;
