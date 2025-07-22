import { UserModel } from "../user/schemaModel";
import { TStudent } from "./interface";
import { StudentModel } from "./schemaModel";

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
  const result = await StudentModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

const deletedStudentFromDB = async (id: string) => {
  const deleteUser = await UserModel.deleteOne({ id });
  const deleteStudent = await StudentModel.deleteOne({ id });
  return {
    deleteUser,
    deleteStudent,
  };
};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deletedStudentFromDB,
};
