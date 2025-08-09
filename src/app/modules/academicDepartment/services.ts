import { TAcademicDepartment } from "./interface";
import { AcademicDepartmentModel } from "./schemaModel";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async (
  query: Record<string, unknown>
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(query);
  return result;
};
const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id);
  return result;
};
const updateAcademicDepartmentFromDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>
) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id);
  return result;
};
const deleteAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcademicDepartmentModel.findByIdAndUpdate(id);
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentFromDB,
  deleteAcademicDepartmentFromDB,
};
