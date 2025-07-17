"use server";

import { getCurrentUser } from "@/util/getCurrentUser";

export async function getFeedback() {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "User not found" };
  }
  return user.feedback; 
}
