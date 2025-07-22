"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = require("../modules/user/route");
const route_2 = require("../modules/student/route");
const route_3 = require("../modules/faculty/route");
const route_4 = require("../modules/admin/route");
const route_5 = require("../modules/semester/route");
const route_6 = require("../modules/academicFaculty/route");
const route_7 = require("../modules/department/route");
const route_8 = require("../modules/courses/route");
const router = express_1.default.Router();
const routerModule = [
    {
        path: "/users",
        route: route_1.UserRouter,
    },
    {
        path: "/students",
        route: route_2.StudentRoute,
    },
    {
        path: "/faculties",
        route: route_3.FacultyRoute,
    },
    {
        path: "/admins",
        route: route_4.AdminRoute,
    },
    {
        path: "/semesters",
        route: route_5.SemesterRouter,
    },
    {
        path: "/academicFaculty",
        route: route_6.AcademicFacultyRoute,
    },
    {
        path: "/departments",
        route: route_7.DEpartmentRouter,
    },
    {
        path: "/courses",
        route: route_8.CourseRouter,
    },
];
routerModule.forEach((route) => router.use(route.path, route.route));
exports.default = router;
