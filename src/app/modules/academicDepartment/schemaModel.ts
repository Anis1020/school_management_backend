import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./interface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({});

export const AcademicDepartmentModel = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
