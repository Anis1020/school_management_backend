import { TUser } from "./interface";

const createStudentIntoDB = async (payload: TUser) => {};
const createFacultyIntoDB = async (payload: TUser) => {};
const createAdminIntoDB = async (payload: TUser) => {};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
