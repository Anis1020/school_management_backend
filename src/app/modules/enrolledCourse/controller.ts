import catchAsync from "../../utils/catchAsync";
import { EnrolledCourseServices } from "./services";

const createEnrolledCourse = catchAsync(async (req, res) => {
  const result = await EnrolledCourseServices.createEnrolledCourseIntoDB(
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Create EnrolledCourse successfully",
    data: result,
  });
});
const getAllEnrolledCourse = catchAsync(async (req, res) => {
  const result = await EnrolledCourseServices.getAllEnrolledCourseFromDB(
    req.query
  );
  res.status(200).json({
    success: true,
    message: "get all EnrolledCourse successfully",
    data: result,
  });
});
const getSingleEnrolledCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EnrolledCourseServices.getSingleEnrolledCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all EnrolledCourse successfully",
    data: result,
  });
});
const updateEnrolledCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EnrolledCourseServices.updateEnrolledCourseFromDB(
    id,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "get all EnrolledCourse successfully",
    data: result,
  });
});
const deleteEnrolledCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EnrolledCourseServices.deleteEnrolledCourseFromDB(id);
  res.status(200).json({
    success: true,
    message: "get all EnrolledCourse successfully",
    data: result,
  });
});

export const EnrolledCourseController = {
  createEnrolledCourse,
  getAllEnrolledCourse,
  getSingleEnrolledCourse,
  updateEnrolledCourse,
  deleteEnrolledCourse,
};
