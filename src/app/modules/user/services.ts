import mongoose from "mongoose";
import { TAdmin } from "../admin/interface";
import { AdminModel } from "../admin/schemaModel";
import { TFaculty } from "../faculty/interface";
import { FacultyModel } from "../faculty/schemaModel";
import { TStudent } from "../student/interface";
import { StudentModel } from "../student/schemaModel";
import { TUser } from "./interface";
import { UserModel } from "./schemaModel";
import { SemesterModel } from "../semester/schemaModel";
import { generatedID } from "./user.utils";

// import { UserModel } from "./schemaModel";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const admissionSemester = await SemesterModel.findById(
    payload.academicSemester
  ); //, {}, { session }
  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }
  try {
    const userData: Partial<TUser> = {};
    userData.password = password || "pass123";
    userData.role = "student";
    userData.id = (await generatedID(admissionSemester)) || "student1"; // Use payload.id if available, or generate one

    const newUser = await UserModel.create([userData], { session });
    payload.id = newUser[0].id;
    // Only assign payload.user if your schema supports it
    payload.user = newUser[0]._id;
    const newStudent = await StudentModel.create([payload], { session });
    await session.commitTransaction();
    session.endSession();
    return newStudent[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw new Error(
      "fail to create user and student: " + (error as Error).message
    );
  }
};

//create faculty
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

//create admin
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
