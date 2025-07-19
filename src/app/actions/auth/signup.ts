// src/app/actions/auth/signup.ts
"use server";

import { signUpSchema } from "@/lib/validators/signUpSchema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { User } from "@/types/User";

const USERS_PATH = path.join(process.cwd(), "src", "data", "users.json");

export async function signup(prevState: unknown, formData: FormData) {
  const user = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!user.success) {
    return { error: user.error.issues.map((e) => e.message).join(", ") };
  }

  const raw = await fs.readFile(USERS_PATH, "utf-8");
  const users = JSON.parse(raw);

  const { name, email, password } = user.data;
  const userExists = users.find((u: User) => u.email === email);
  if (userExists) {
    return { error: "User already exists" };
  }

  const newUserId = users.length + 1;
  const newUser = {
    id: newUserId,
    name,
    email,
    password,
    feedback: [],
  };

  users.push(newUser);

  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));

  (await cookies()).set("userId", newUserId.toString(), {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  });

  redirect("/dashboard");
}
