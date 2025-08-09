import { Router } from "express";
import { UserRouter } from "../modules/user/route";
import { StudentRouter } from "../modules/student/route";
import { FacultyRouter } from "../modules/faculty/route";
import { AdminRouter } from "../modules/admin/route";
import { AcademicDepartmentRouter } from "../modules/academicDepartment/route";
import { AcademicFacultyRouter } from "../modules/academicFaculty/route";
import { AcademicSemesterRouter } from "../modules/academicSemester/route";
import { CourseRouter } from "../modules/course/route";
import { EnrolledCourseRouter } from "../modules/enrolledCourse/route";

const router = Router();

const routerProvider = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/students",
    route: StudentRouter,
  },
  {
    path: "/faculties",
    route: FacultyRouter,
  },
  {
    path: "/admin",
    route: AdminRouter,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRouter,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRouter,
  },
  {
    path: "/academic-semester",
    route: AcademicSemesterRouter,
  },
  {
    path: "/courses",
    route: CourseRouter,
  },
  {
    path: "/enrolled-courses",
    route: EnrolledCourseRouter,
  },
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;
