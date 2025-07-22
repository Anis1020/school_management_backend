import z from "zod";
const createUserValidation = z.object({
  body: z.object({
    password: z.string(),
  }),
});

export const UserValidations = {
  createUserValidation,
};
