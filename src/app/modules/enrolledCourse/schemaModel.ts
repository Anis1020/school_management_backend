import { model, Schema } from "mongoose";
import { TEnrolledCourse } from "./interface";

const enrolledCourseSchema = new Schema<TEnrolledCourse>({});

export const EnrolledCourseModel = model<TEnrolledCourse>(
  "EnrolledCourse",
  enrolledCourseSchema
);
