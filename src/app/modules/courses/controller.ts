import catchAsync from "../../utils/catchAsync";
import { CourseServices } from "./services";

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Course created successfully",
    data: result,
  });
});

export const CourseController = {
  createCourse,
};
