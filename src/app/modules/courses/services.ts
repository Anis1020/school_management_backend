import { TCourse } from "./interface";
import { CourseModel } from "./schemaModel";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
};
