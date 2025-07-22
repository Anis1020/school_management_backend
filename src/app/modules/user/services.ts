import { TAdmin } from "../admin/interface";
import { AdminModel } from "../admin/schemaModel";
import { TFaculty } from "../faculty/interface";
import { FacultyModel } from "../faculty/schemaModel";
import { TStudent } from "../student/interface";
import { StudentModel } from "../student/schemaModel";
import { TUser } from "./interface";
import { UserModel } from "./schemaModel";
// import { UserModel } from "./schemaModel";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = password || "pass123";
  userData.role = "student";
  userData.id = "student1";
  const newUser = await UserModel.create(userData);
  payload.id = newUser.id;
  payload.user = newUser._id;
  // payload.email=newUser.email
  const result = await StudentModel.create(payload);
  return result;
};

//TODO
const createFacultyIntoDB = async (password: string, payload: TFaculty) => {
  const userData: Partial<TUser> = {};
  userData.password = password || "faculty123";
  userData.role = "faculty";
  userData.id = "faculty1";
  const newUser = await UserModel.create(userData);
  payload.id = newUser.id;
  payload.user = newUser._id;
  // payload.email=newUser.email
  const result = await FacultyModel.create(payload);
  return result;
};

const createAdminIntoDB = async (password: string, payload: TAdmin) => {
  const userData: Partial<TUser> = {};
  userData.password = password || "admin123";
  userData.role = "admin";
  userData.id = "admin1";
  const newUser = await UserModel.create(userData);
  payload.id = newUser.id;
  payload.user = newUser._id;
  // payload.email=newUser.email
  const result = await AdminModel.create(payload);
  return result;
};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
