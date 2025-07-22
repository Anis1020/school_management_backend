import z from "zod";

const createStudentValidation = z.object({
  body: z.object({
    id: z.string(),
    user: z.string(),
    name: z.string(),
    gender: z.enum(["male", "female", "other"]),
    dateOfBirth: z.string(),
    email: z.string(),
    contactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: z.string(),
    localGuardian: z.string(),
    profileImg: z.string(),
    academicSemester: z.string(),
    academicDepartment: z.string(),
  }),
});

export const studentValidations = {
  createStudentValidation,
};
