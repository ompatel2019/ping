"use server";

import { feedbackSchema } from "@/lib/userFeedbackSchema";
import fs from "fs/promises";
import path from "path";
import { User } from "@/types/User";

const USERS_PATH = path.join(process.cwd(), "src", "data", "users.json");

export async function addFeedback(prevState: unknown, formData: FormData) {
  const feedback = feedbackSchema.safeParse({
    feedback: formData.get("feedback"),
  });

  if (!feedback.success) {
    return { error: feedback.error.issues.map((e) => e.message).join(", ") };
  }

  const raw = await fs.readFile(USERS_PATH, "utf-8");
  const users = JSON.parse(raw);

  const user = users.find((user: User) => user.id === 1);
  if (!user) {
    return { error: "User not found" };
  }  

  if (!user.feedback) {
    user.feedback = [];
  }

  user.feedback.push({
    id: user.feedback.length + 1,
    feedback: feedback.data.feedback,
    createdAt: new Date().toISOString(),
  });

  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));

  return { success: "Feedback added successfully" };
}
