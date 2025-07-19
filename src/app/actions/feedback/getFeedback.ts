// src/app/actions/getFeedback.ts
"use server";

import { getCurrentUser } from "@/lib/user/getCurrentUser";

export async function getFeedback() {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "User not found" };
  }
  return user.feedback; 
}
