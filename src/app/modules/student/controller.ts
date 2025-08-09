import catchAsync from "../../utiles/catchAsync";

const getAllStudent = catchAsync(async (req, res) => {});
const getSingleStudent = catchAsync(async (req, res) => {});
const updateStudent = catchAsync(async (req, res) => {});
const deleteStudent = catchAsync(async (req, res) => {});

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
