import catchAsync from "../../utils/catchAsync";
import { AcademicSemesterModel } from "./schemaModel";
import { AcademicSemesterServices } from "./services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Create AcademicSemester successfully",
    data: result,
  });
});
const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB(
    req.query
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicSemester successfully",
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
    id
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicSemester successfully",
    data: result,
  });
});
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(
    id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicSemester successfully",
    data: result,
  });
});
const deleteAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.deleteAcademicSemesterFromDB(
    id
  );
  res.status(200).json({
    success: true,
    message: "get all AcademicSemester successfully",
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
