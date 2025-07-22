import { success } from "zod";
import { StudentServices } from "./services";
import catchAsync from "../../utils/catchAsync";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "All student get successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single student get successfully",
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.updateStudentFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "Single student update successfully",
    data: result,
  });
});

const deletedStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deletedStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single student deleted successfully",
    data: result,
  });
});
export const StudentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deletedStudent,
};
