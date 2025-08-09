import mongoose from "mongoose";
import config from "../../config";
import { TStudent } from "../student/interface";
import { TUser } from "./interface";
import { UserModel } from "./schemaModel";
import { StudentModel } from "../student/schemaModel";
import { FacultyModel } from "../faculty/schemaModel";

const createStudentIntoDB = async (payload: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = config.default_pass;
  userData.role = "student";
  userData.id = "1234";

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const newUser = await UserModel.create([userData], { session });
    if (!newUser.length) {
      throw new Error("Fail to create User");
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    const newStudent = await StudentModel.create([payload], { session });

    await session.commitTransaction();
    session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("fail to create student");
  }
};
const createFacultyIntoDB = async (payload: TUser) => {
  const userData: Partial<TUser> = {};
  userData.role = "faculty";
  userData.password = config.default_pass;
  userData.id = "1234";

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await UserModel.create([userData], { session });
    if (!newUser) {
      throw new Error("Fail to create User");
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;
    const newFaculty = await FacultyModel.create([payload], { session });
    if (!newFaculty) {
      throw new Error("Fail to create Faculty");
    }
    await session.commitTransaction();
    await session.endSession();
    return newFaculty;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("fain to create user or faculty");
  }
};
const createAdminIntoDB = async (payload: TUser) => {};

export const UserServices = {
  createStudentIntoDB,
  createFacultyIntoDB,
  createAdminIntoDB,
};
