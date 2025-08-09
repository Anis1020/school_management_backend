import { TEnrolledCourse } from "./interface";
import { EnrolledCourseModel } from "./schemaModel";

const createEnrolledCourseIntoDB = async (payload: TEnrolledCourse) => {
  const result = await EnrolledCourseModel.create(payload);
  return result;
};

const getAllEnrolledCourseFromDB = async (query: Record<string, unknown>) => {
  const result = await EnrolledCourseModel.findByIdAndUpdate(query);
  return result;
};
const getSingleEnrolledCourseFromDB = async (id: string) => {
  const result = await EnrolledCourseModel.findByIdAndUpdate(id);
  return result;
};
const updateEnrolledCourseFromDB = async (
  id: string,
  payload: Partial<TEnrolledCourse>
) => {
  const result = await EnrolledCourseModel.findByIdAndUpdate(id);
  return result;
};
const deleteEnrolledCourseFromDB = async (id: string) => {
  const result = await EnrolledCourseModel.findByIdAndUpdate(id);
  return result;
};

export const EnrolledCourseServices = {
  createEnrolledCourseIntoDB,
  getAllEnrolledCourseFromDB,
  getSingleEnrolledCourseFromDB,
  updateEnrolledCourseFromDB,
  deleteEnrolledCourseFromDB,
};
