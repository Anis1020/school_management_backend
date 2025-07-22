import { TDepartment } from "./interface";
import { DepartmentModel } from "./schemaModel";

const createDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await DepartmentModel.create(payload);
  return result;
};

export const DepartmentServices = {
  createDepartmentIntoDB,
};
