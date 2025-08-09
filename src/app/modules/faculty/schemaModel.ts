import { model, Schema } from "mongoose";
import { TFaculty } from "./interface";

const facultySchema = new Schema<TFaculty>({});

export const FacultyModel = model<TFaculty>("Faculty", facultySchema);
