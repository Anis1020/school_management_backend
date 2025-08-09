import catchAsync from "../../utiles/catchAsync";

const createStudent = catchAsync(async () => {});
const createFaculty = catchAsync(async () => {});
const createAdmin = catchAsync(async () => {});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};
