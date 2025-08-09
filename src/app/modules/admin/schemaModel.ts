import { model, Schema } from "mongoose";
import { TAdmin } from "./interface";

const adminSchema = new Schema<TAdmin>({});

export const AdminModel = model<TAdmin>("Admin", adminSchema);
