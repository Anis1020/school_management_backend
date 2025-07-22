import { UserModel } from "../user/schemaModel";
import { TAdmin } from "./interface";
import { AdminModel } from "./schemaModel";

const getAllAdminFromDB = async () => {
  const result = await AdminModel.find();
  return result;
};

const getSingleAdminFromDB = async (id: string) => {
  const result = await AdminModel.findOne({ id });
  return result;
};

const updateAdminFromDB = async (id: string, payload: Partial<TAdmin>) => {
  const result = await AdminModel.findOneAndUpdate({ id }, payload, {
    new: true,
  });
  return result;
};

const deletedAdminFromDB = async (id: string) => {
  const deleteUser = await UserModel.deleteOne({ id });
  const deleteAdmin = await AdminModel.deleteOne({ id });
  return {
    deleteUser,
    deleteAdmin,
  };
};

export const AdminServices = {
  getAllAdminFromDB,
  getSingleAdminFromDB,
  updateAdminFromDB,
  deletedAdminFromDB,
};
