import { TSemester } from "./interface";
import { SemesterModel } from "./schemaModel";

const createSemesterIntoDB = async (payload: TSemester) => {
  const result = await SemesterModel.create(payload);
  return result;
};

const getAllSemesterIntoDB = async () => {
  const result = await SemesterModel.find();
  return result;
};

export const SemesterServices = {
  createSemesterIntoDB,
  getAllSemesterIntoDB,
};
