import { Router } from "express";
import { UserRouter } from "../modules/user/route";
import { StudentRouter } from "../modules/student/route";

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
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;
