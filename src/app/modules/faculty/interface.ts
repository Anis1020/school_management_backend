import { Types } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};
export type TGuardian = {
  name: string;
  relation: string;
  occupation: string;
};
export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  name: TName;
  designation: string;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TGuardian;
  profileImg?: string;
};
