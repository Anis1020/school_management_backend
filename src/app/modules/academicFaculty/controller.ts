import catchAsync from "../../utils/catchAsync";
import { AcademicFacultyServices } from "./services";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Academic Faculty is created successfully",
    data: result,
  });
});

export const AcademicFacultyCollections = {
  createAcademicFaculty,
};
