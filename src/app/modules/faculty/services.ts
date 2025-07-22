import { UserModel } from "../user/schemaModel";
import { TFaculty } from "./interface";
import { FacultyModel } from "./schemaModel";

const getAllFacultyFromDB = async () => {
  const result = await FacultyModel.find();
  return result;
};

const getSingleFacultyFromDB = async (id: string) => {
  const result = await FacultyModel.findOne({ id });
  return result;
};

const updateFacultyFromDB = async (id: string, payload: Partial<TFaculty>) => {
  const result = await FacultyModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

const deletedFacultyFromDB = async (id: string) => {
  const deleteUser = await UserModel.deleteOne({ id });
  const deleteFaculty = await FacultyModel.deleteOne({ id });
  return {
    deleteUser,
    deleteFaculty,
  };
};

export const FacultyServices = {
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFacultyFromDB,
  deletedFacultyFromDB,
};
