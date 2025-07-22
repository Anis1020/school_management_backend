import { model, Schema } from "mongoose";
import { TFaculty } from "./interface";

const NameSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
};
const GuardianSchema = {
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
};
const LocalGuardianSchema = {
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
};
const studentSchema = new Schema<TFaculty>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: NameSchema,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: {
    type: String,
    required: true,
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

export const FacultyModel = model<TFaculty>("Faculty", studentSchema);
