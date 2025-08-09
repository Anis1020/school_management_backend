import { model, Schema } from "mongoose";
import { TStudent } from "./interface";

const studentSchema = new Schema<TStudent>({});

export const StudentModel = model<TStudent>("Student", studentSchema);
