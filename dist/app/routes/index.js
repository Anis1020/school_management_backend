"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("../modules/user/route");
const route_2 = require("../modules/student/route");
const route_3 = require("../modules/faculty/route");
const route_4 = require("../modules/admin/route");
const route_5 = require("../modules/academicDepartment/route");
const route_6 = require("../modules/academicFaculty/route");
const route_7 = require("../modules/academicSemester/route");
const route_8 = require("../modules/course/route");
const route_9 = require("../modules/enrolledCourse/route");
const route_10 = require("../modules/offeredCourse/route");
const route_11 = require("../modules/semesterRegistration/route");
const router = (0, express_1.Router)();
const routerProvider = [
    {
        path: "/users",
        route: route_1.UserRouter,
    },
    {
        path: "/students",
        route: route_2.StudentRouter,
    },
    {
        path: "/faculties",
        route: route_3.FacultyRouter,
    },
    {
        path: "/admin",
        route: route_4.AdminRouter,
    },
    {
        path: "/academic-departments",
        route: route_5.AcademicDepartmentRouter,
    },
    {
        path: "/academic-faculty",
        route: route_6.AcademicFacultyRouter,
    },
    {
        path: "/academic-semester",
        route: route_7.AcademicSemesterRouter,
    },
    {
        path: "/courses",
        route: route_8.CourseRouter,
    },
    {
        path: "/enrolled-courses",
        route: route_9.EnrolledCourseRouter,
    },
    {
        path: "/offered-courses",
        route: route_10.OfferedCourseRouter,
    },
    {
        path: "/semester-registration",
        route: route_11.SemesterRegistrationRouter,
    },
];
routerProvider.forEach((route) => router.use(route.path, route.route));
exports.default = router;
