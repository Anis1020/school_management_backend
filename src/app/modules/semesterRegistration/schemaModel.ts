import { model, Schema } from "mongoose";
import { TSemesterRegistration } from "./interface";

const semesterRegistrationSchema = new Schema<TSemesterRegistration>({});

export const SemesterRegistrationModel = model<TSemesterRegistration>(
  "SemesterRegistration",
  semesterRegistrationSchema
);
