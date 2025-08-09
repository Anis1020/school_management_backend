import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./services";

const getAllAdmin = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllAdminFromDB(req.query);
  res.status(200).json({
    success: true,
    message: "get all Admin successfully",
    data: result,
  });
});
const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all Admin successfully",
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.updateAdminFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "get all Admin successfully",
    data: result,
  });
});
const deleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.deleteAdminFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all Admin successfully",
    data: result,
  });
});

export const AdminController = {
  getAllAdmin,
  getSingleAdmin,
  updateAdmin,
  deleteAdmin,
};
