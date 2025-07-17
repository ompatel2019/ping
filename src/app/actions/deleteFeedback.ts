"use server";

import { getCurrentUser } from "@/util/getCurrentUser";
import { User } from "@/types/User";
import fs from "fs/promises";
import path from "path";

const USERS_PATH = path.join(process.cwd(), "src", "data", "users.json");

export async function deleteFeedback(formData: FormData) {
  const feedbackId = Number(formData.get("feedbackId"));
  if (!feedbackId) return;

  const raw = await fs.readFile(USERS_PATH, "utf-8");
  const users: User[] = JSON.parse(raw);

  const userId = (await getCurrentUser())?.id;
  if (!userId) return;

  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) return;

  users[userIndex].feedback = users[userIndex].feedback.filter(
    (f) => f.id !== feedbackId
  );

  await fs.writeFile(USERS_PATH, JSON.stringify(users, null, 2));
}
