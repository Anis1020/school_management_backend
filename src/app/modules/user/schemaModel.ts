import { model, Schema } from "mongoose";
import { TUser } from "./interface";

const userSchema = new Schema<TUser>({});

export const UserModel = model<TUser>("User", userSchema);
