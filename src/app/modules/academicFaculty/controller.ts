import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./services";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "create AcademicFaculty successfully",
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB(
    req.query
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicFaculty successfully",
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(
    id
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicFaculty successfully",
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.updateAcademicFacultyFromDB(
    id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicFaculty successfully",
    data: result,
  });
});
const deleteAcademicFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicFacultyServices.deleteAcademicFacultyFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all AcademicFaculty successfully",
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
  deleteAcademicFaculty,
};
