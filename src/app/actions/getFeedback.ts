"use server";

import users from "@/users.json";

export async function getFeedback(userId: string) {
  const user = users.find((user) => user.id === Number(userId));
  if (!user) {
    return { error: "User not found" };
  }
  return user.feedback;
}
