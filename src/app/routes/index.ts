import express from "express";
import { UserRouter } from "../modules/user/route";
import { StudentRoute } from "../modules/student/route";
import { FacultyRoute } from "../modules/faculty/route";
import { AdminRoute } from "../modules/admin/route";
import { SemesterRouter } from "../modules/semester/route";
import { AcademicFacultyRoute } from "../modules/academicFaculty/route";
import { DEpartmentRouter } from "../modules/department/route";
import { CourseRouter } from "../modules/courses/route";

const router = express.Router();

const routerModule = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/students",
    route: StudentRoute,
  },
  {
    path: "/faculties",
    route: FacultyRoute,
  },
  {
    path: "/admins",
    route: AdminRoute,
  },
  {
    path: "/semesters",
    route: SemesterRouter,
  },
  {
    path: "/academicFaculty",
    route: AcademicFacultyRoute,
  },
  {
    path: "/departments",
    route: DEpartmentRouter,
  },
  {
    path: "/courses",
    route: CourseRouter,
  },
];

routerModule.forEach((route) => router.use(route.path, route.route));

export default router;
