import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./interface";

const academicSemesterSchema = new Schema<TAcademicSemester>({});

export const AcademicSemesterModel = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
