import { model, Schema } from "mongoose";
import { TOfferedCourse } from "./interface";

const offeredCourseSchema = new Schema<TOfferedCourse>({});

export const OfferedCourseModel = model<TOfferedCourse>(
  "OfferedCourse",
  offeredCourseSchema
);
