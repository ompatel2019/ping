import { z } from "zod";

export const signUpSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be atleast 6 characters long",
  }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
