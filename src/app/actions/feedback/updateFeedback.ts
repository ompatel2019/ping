// src/app/actions/feedback/updateFeedback.ts
"use server";
import { createClient } from "@/lib/supabase/client";

export async function updateFeedback(formData: FormData): Promise<void> {
  const feedbackId = String(formData.get("feedbackId"));
  const isCompleteStr = formData.get("isComplete");

  // Add debugging:
  console.log("feedbackId:", feedbackId);
  console.log("isCompleteStr:", isCompleteStr);

  const isComplete = isCompleteStr === "true";
  console.log("isComplete (parsed bool):", isComplete);

  const supabase = createClient();

  const { error } = await supabase
    .from("feedback")
    .update({
      is_complete: !isComplete,
    })
    .eq("id", feedbackId);

  if (error) {
    console.log(error);
  }
  return;
}
