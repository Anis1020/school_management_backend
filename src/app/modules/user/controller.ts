import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./services";

const createStudent = catchAsync(async (req, res) => {
  const result = await UserServices.createStudentIntoDB(req.body.student);
  res.status(200).json({
    success: true,
    message: "Student create successfully",
    data: result,
  });
});
const createFaculty = catchAsync(async (req, res) => {
  const result = await UserServices.createStudentIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Faculty  create successfully",
    data: result,
  });
});
const createAdmin = catchAsync(async () => {});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};
