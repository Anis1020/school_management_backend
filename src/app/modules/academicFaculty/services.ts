import { TAcademicFaculty } from "./interface";
import { AcademicFacultyModel } from "./schemaModel";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async (query: Record<string, unknown>) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(query);
  return result;
};
const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id);
  return result;
};
const updateAcademicFacultyFromDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>
) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id);
  return result;
};
const deleteAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFacultyModel.findByIdAndUpdate(id);
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyFromDB,
  deleteAcademicFacultyFromDB,
};
