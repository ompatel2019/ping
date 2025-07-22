// src/app/actions/feedback/getFeedback.ts
"use server";

import { createClient } from "@/lib/supabase/client";

export async function getFeedback() {
  const supabase = createClient();
  const { data, error } = await supabase.from("feedback").select("*");

  if (error) {
    return { error: error.message };
  }
  return data;
}
