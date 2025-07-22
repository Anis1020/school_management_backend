import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./services";

const getAllAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminFromDB();
  res.status(200).json({
    success: true,
    message: "All Admin get successfully",
    data: result,
  });
});

const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single Admin get successfully",
    data: result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.updateAdminFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "Single Admin update successfully",
    data: result,
  });
});

const deletedAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.deletedAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single Admin deleted successfully",
    data: result,
  });
});
export const AdminController = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deletedAdmin,
};
