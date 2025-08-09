import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./interface";

const academicFacultySchema = new Schema<TAcademicFaculty>({});

export const AcademicFacultyModel = model<TAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema
);
