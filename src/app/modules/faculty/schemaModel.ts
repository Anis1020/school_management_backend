import { model, Schema } from "mongoose";
import { TFaculty, TGuardian, TName } from "./interface";

// Name sub-schema
const NameSchema = new Schema<TName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Guardian sub-schema
const GuardianSchema = new Schema<TGuardian>({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  occupation: { type: String, required: true },
});

const facultySchema = new Schema<TFaculty>(
  {
    id: { type: String, required: true, unique: true, trim: true },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
      trim: true,
    },
    name: { type: NameSchema, required: true, trim: true },
    designation: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
      trim: true,
    },
    dateOfBirth: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    contactNo: { type: String, required: true, trim: true },
    presentAddress: { type: String, required: true, trim: true },
    permanentAddress: { type: String, required: true, trim: true },
    guardian: { type: GuardianSchema, required: true, trim: true },
    localGuardian: { type: GuardianSchema, required: true, trim: true },
    profileImg: { type: String },
  },
  {
    timestamps: true,
  }
);

export const FacultyModel = model<TFaculty>("Faculty", facultySchema);
