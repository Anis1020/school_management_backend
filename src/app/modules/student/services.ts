import { TStudent } from "./interface";

const getAllStudentFromDB = async (query: string) => {};
const getSingleStudentFromDB = async (id: string) => {};
const updateStudentFromDB = async (
  id: string,
  payload: Partial<TStudent>
) => {};
const deleteStudentFromDB = async (id: string) => {};

export const StudentServices = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentFromDB,
  deleteStudentFromDB,
};
