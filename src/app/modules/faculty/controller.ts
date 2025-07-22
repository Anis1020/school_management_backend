import catchAsync from "../../utils/catchAsync";
import { FacultyServices } from "./services";

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultyFromDB();
  res.status(200).json({
    success: true,
    message: "All faculties get successfully",
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single faculty get successfully",
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.updateFacultyFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "Single faculty update successfully",
    data: result,
  });
});

const deletedFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.deletedFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "Single faculty deleted successfully",
    data: result,
  });
});
export const FacultyController = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deletedFaculty,
};
