import { model, Schema } from "mongoose";
import { TCourse } from "./interface";

const courseSchema = new Schema<TCourse>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    prefix: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      enum: ["01", "02", "03", "04"],
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
    },
    preRequisite: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
export const CourseModel = model<TCourse>("Course", courseSchema);
