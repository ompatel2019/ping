// src/app/actions/addFeedback.ts
"use server";

import { feedbackSchema } from "@/lib/validators/userFeedbackSchema";
import fs from "fs/promises";
import path from "path";
import { User } from "@/types/User";

const USERS_PATH = path.join(process.cwd(), "src", "data", "users.json");

export async function addFeedback(
  prevState: { error: string; success: string },
  formData: FormData
): Promise<{ error: string; success: string }> {
  const feedback = feedbackSchema.safeParse({
    feedback: formData.get("feedback"),
  });

  if (!feedback.success) {
    return {
      error: feedback.error.issues.map((e) => e.message).join(", "),
      success: "",
    };
  }

  const raw = await fs.readFile(USERS_PATH, "utf-8");
  const users = JSON.parse(raw);

  const user = users.find((u: User) => u.id === 1);
  if (!user) {
    return { error: "User not found", success: "" };
  }

  if (!user.feedback) {
    user.feedback = [];
  }

  user.feedback.push({
    id: Math.floor(Math.random() * 1000000),
    feedback: feedback.data.feedback,
    createdAt: new Date().toISOString(),
    isComplete: false,
  });

  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));

  return { error: "", success: "Feedback added successfully" };
}
