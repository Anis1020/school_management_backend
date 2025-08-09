import catchAsync from "../../utils/catchAsync";
import { AcademicDepartmentServices } from "./services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB(req.body);
  res.status(200).json({
    success: true,
    message: "create AcademicDepartment successfully",
    data: result,
  });
});
const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB(req.query);
  res.status(200).json({
    success: true,
    message: "get all AcademicDepartment successfully",
    data: result,
  });
});
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all AcademicDepartment successfully",
    data: result,
  });
});
const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentFromDB(
      id,
      req.body
    );
  res.status(200).json({
    success: true,
    message: "get all AcademicDepartment successfully",
    data: result,
  });
});
const deleteAcademicDepartment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicDepartmentServices.deleteAcademicDepartmentFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all AcademicDepartment successfully",
    data: result,
  });
});

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
