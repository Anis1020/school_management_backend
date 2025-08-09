import { TFaculty } from "./interface";
import { FacultyModel } from "./schemaModel";

const getAllFacultyFromDB = async (query: Record<string, unknown>) => {
  const result = await FacultyModel.findByIdAndUpdate(query);
  return result;
};
const getSingleFacultyFromDB = async (id: string) => {
  const result = await FacultyModel.findByIdAndUpdate(id);
  return result;
};
const updateFacultyFromDB = async (id: string, payload: Partial<TFaculty>) => {
  const result = await FacultyModel.findByIdAndUpdate(id);
  return result;
};
const deleteFacultyFromDB = async (id: string) => {
  const result = await FacultyModel.findByIdAndUpdate(id);
  return result;
};

export const FacultyServices = {
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFacultyFromDB,
  deleteFacultyFromDB,
};
