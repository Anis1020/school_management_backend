import { Types } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};
export type TGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};
export type TFaculty = {
  id: string;
  user: Types.ObjectId;
  name: TName;
  gender: "male" | "female" | "other";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg: string;
  academicSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
};
