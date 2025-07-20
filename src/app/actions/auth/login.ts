// src/app/actions/auth/login.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/validators/loginSchema";
import { User } from "@/types/User";
import users from "@/data/users.json";

export async function login(prevState: { error: string }, formData: FormData) {
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    const errors = result.error.issues.map((e) => e.message).join(", ");
    return { error: errors };
  }

  const { email, password } = result.data;
  const user = users.find((u: User) => u.email === email);
  if (!user || user.password !== password) {
    return {
      error: "Invalid credentials. Please check your email and password.",
    };
  }

  (await cookies()).set("userId", user.id.toString(), {
    httpOnly: true,
    path: "/",
    secure: false,
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/dashboard");
}
