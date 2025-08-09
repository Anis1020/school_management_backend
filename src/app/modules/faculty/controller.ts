import catchAsync from "../../utils/catchAsync";
import { FacultyServices } from "./services";

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.getAllFacultyFromDB(req.query);
  res.status(200).json({
    success: true,
    message: "get all Faculty successfully",
    data: result,
  });
});
const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.getSingleFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all Faculty successfully",
    data: result,
  });
});
const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.updateFacultyFromDB(id, req.body);
  res.status(200).json({
    success: true,
    message: "get all Faculty successfully",
    data: result,
  });
});
const deleteFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacultyServices.deleteFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all Faculty successfully",
    data: result,
  });
});

export const FacultyController = {
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
