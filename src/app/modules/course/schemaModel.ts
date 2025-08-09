import { model, Schema } from "mongoose";
import { TCourse } from "./interface";

const courseSchema = new Schema<TCourse>({});

export const CourseModel = model<TCourse>("Course", courseSchema);
