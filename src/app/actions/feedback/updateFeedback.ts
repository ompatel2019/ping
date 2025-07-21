// src/app/actions/updateFeedback.ts
"use server";

import { supabase } from "@/lib/supabase-client";

export async function updateFeedback(formData: FormData): Promise<void> {
  const feedbackId = String(formData.get("feedbackId"));

  const { error } = await supabase
    .from("feedback")
    .update({
      is_complete: true,
    })
    .eq("id", feedbackId);

  if (error) {
    console.log(error);
  }

  return;
}
