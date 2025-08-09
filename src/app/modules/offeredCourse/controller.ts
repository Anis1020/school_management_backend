import catchAsync from "../../utils/catchAsync";
import { OfferedCourseServices } from "./services";

const createOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Create OfferedCourse successfully",
    data: result,
  });
});
const getAllOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCourseServices.getAllOfferedCourseFromDB(
    req.query
  );
  res.status(200).json({
    success: true,
    message: "get all OfferedCourse successfully",
    data: result,
  });
});
const getSingleOfferedCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.getSingleOfferedCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all OfferedCourse successfully",
    data: result,
  });
});
const updateOfferedCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.updateOfferedCourseFromDB(
    id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "get all OfferedCourse successfully",
    data: result,
  });
});
const deleteOfferedCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.deleteOfferedCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all OfferedCourse successfully",
    data: result,
  });
});

export const OfferedCourseController = {
  createOfferedCourse,
  getAllOfferedCourse,
  getSingleOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourse,
};
