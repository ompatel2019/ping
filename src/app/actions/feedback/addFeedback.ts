// src/app/actions/feedback/addFeedback.ts
"use server";

import { feedbackSchema } from "@/lib/validators/userFeedbackSchema";
import { createClient } from "@/lib/supabase/client";

export async function addFeedback(
  prevState: { error: string; success: string },
  formData: FormData
): Promise<{ error: string; success: string }> {
  const feedback = feedbackSchema.safeParse({
    title: formData.get("title"),
    feedback: formData.get("feedback"),
  });

  if (!feedback.success) {
    return {
      error: feedback.error.issues.map((e) => e.message).join(", "),
      success: "",
    };
  }

  const supabase = createClient();

  const { error } = await supabase.from("feedback").insert({
    title: feedback.data.title,
    feedback: feedback.data.feedback,
    created_at: new Date().toISOString(),
    is_complete: false,
  });

  if (error) {
    return { error: error.message, success: "" };
  }

  return { error: "", success: "Feedback added successfully" };
}
