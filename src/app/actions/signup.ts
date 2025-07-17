"use server";

import { signUpSchema } from "@/lib/signUpSchema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { User } from "@/types/User";

// Define the path to users.json
const USERS_PATH = path.join(process.cwd(), "src/data", "users.json");

export async function signup(prevState: unknown, formData: FormData) {
  const user = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!user.success) {
    return { error: user.error.issues.map((e) => e.message).join(", ") };
  }

  // Read existing users from file
  const raw = await fs.readFile(USERS_PATH, "utf-8");
  const users = JSON.parse(raw);

  const userExists = users.find((u: User) => u.email === user.data.email);
  if (userExists) {
    return { error: "User already exists" };
  }

  const newUserId = users.length + 1;
  const newUser = {
    id: newUserId,
    name: user.data.name,
    email: user.data.email,
    password: user.data.password,
    feedback: [],
  };

  users.push(newUser);

  // Write updated users array back to the file
  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));

  // Set session cookie
  (await cookies()).set("userId", newUserId.toString(), {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  });

  redirect("/dashboard");
}
