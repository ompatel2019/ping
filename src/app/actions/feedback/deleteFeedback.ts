// src/app/actions/feedback/deleteFeedback.ts
"use server";
import { supabase } from "@/lib/supabase/client";

export async function deleteFeedback(formData: FormData): Promise<void> {
  const feedbackId = String(formData.get("feedbackId"));
  if (!feedbackId) return;

  const { error } = await supabase
    .from("feedback")
    .delete()
    .eq("id", feedbackId);

  if (error) {
    console.log(error);
  }

  return;
}
