import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./services";

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;
  const result = await UserServices.createStudentIntoDB(password, student);
  res.status(200).json({
    success: true,
    message: "student created successfully",
    data: result,
  });
});

//TODO
const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty } = req.body;
  const result = await UserServices.createFacultyIntoDB(password, faculty);
  res.status(200).json({
    success: true,
    message: "student created successfully",
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  const { password, admin } = req.body;
  const result = await UserServices.createAdminIntoDB(password, admin);
  res.status(200).json({
    success: true,
    message: "student created successfully",
    data: result,
  });
});
export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};
