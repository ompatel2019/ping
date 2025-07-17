"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/schema";

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASSWORD = "admin123";

export async function login(prevState: { error: string }, formData: FormData) {
  // Get and validate input
  const result = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    // Only show first error, or all as a single string
    const errors = result.error.issues.map((e) => e.message).join(", ");
    return { error: errors };
  }

  const { email, password } = result.data;
  if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
    return {
      error: "Invalid credentials. Please check your email and password.",
    };
  }

  // Set cookie/session and redirect to dashboard
  (await cookies()).set("session", "valid", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/dashboard");
}
