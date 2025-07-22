import { date } from "zod";
import catchAsync from "../../utils/catchAsync";
import { DepartmentServices } from "./services";

const createDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentServices.createDepartmentIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Department is created successfully",
    date: result,
  });
});

export const DepartmentController = {
  createDepartment,
};
