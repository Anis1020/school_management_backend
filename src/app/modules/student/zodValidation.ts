import { z } from "zod";

// Name schema
const nameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

// Guardian schema
const guardianSchema = z.object({
  name: z.string().min(1, "Guardian name is required"),
  relation: z.string().min(1, "Relation is required"),
  occupation: z.string().min(1, "Occupation is required"),
});

// Student schema
export const createStudentValidationSchema = z.object({
  body: z.object({
    id: z.string().min(1, "ID is required"),
    user: z.string(),
    name: nameSchema,
    gender: z.enum(["male", "female", "other"]),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    email: z.string(),
    contactNo: z.string().min(1, "Contact number is required"),
    presentAddress: z.string().min(1, "Present address is required"),
    permanentAddress: z.string().min(1, "Permanent address is required"),
    guardian: guardianSchema,
    localGuardian: guardianSchema,
    profileImg: z.string(),
  }),
});

//for update
// Name schema
const updateNameSchema = z.object({
  firstName: z.string().min(1, "First name is required").optional(),
  lastName: z.string().min(1, "Last name is required").optional(),
});

// Guardian schema
const updateGuardianSchema = z.object({
  name: z.string().min(1, "Guardian name is required").optional(),
  relation: z.string().min(1, "Relation is required").optional(),
  occupation: z.string().min(1, "Occupation is required").optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    id: z.string().min(1, "ID is required").optional(),
    user: z.string().optional(),
    name: updateNameSchema,
    gender: z.enum(["male", "female", "other"]).optional(),
    dateOfBirth: z.string().min(1, "Date of birth is required").optional(),
    email: z.string().optional(),
    contactNo: z.string().min(1, "Contact number is required").optional(),
    presentAddress: z.string().min(1, "Present address is required").optional(),
    permanentAddress: z
      .string()
      .min(1, "Permanent address is required")
      .optional(),
    guardian: updateGuardianSchema,
    localGuardian: updateGuardianSchema,
    profileImg: z.string().optional(),
  }),
});
