import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Invalid Email",
  }),
  password: z
    .string({
      message: "Invalid Password",
    })
    .min(6, {
      message: "Password must be atleast 6 characters long",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
