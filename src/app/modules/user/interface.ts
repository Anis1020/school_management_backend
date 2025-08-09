import { Types } from "mongoose";

export interface TUser {
  id: string;
  user: Types.ObjectId;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: "super-admin" | "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}
