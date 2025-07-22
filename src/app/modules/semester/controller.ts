import catchAsync from "../../utils/catchAsync";
import { SemesterServices } from "./services";

const createSemester = catchAsync(async (req, res) => {
  const result = await SemesterServices.createSemesterIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Semester is created successfully",
    data: result,
  });
});

export const SemesterController = {
  createSemester,
};
