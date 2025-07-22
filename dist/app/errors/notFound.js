"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(404).json({
        success: true,
        message: "API not found",
    });
};
exports.default = notFound;
