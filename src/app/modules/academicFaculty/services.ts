import { TAcademicFaculty } from "./interface";
import { AcademicFacultyModel } from "./schemaModel";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
};
