// src/app/actions/feedback/getFeedback.ts
"use server";

import { supabase } from "@/lib/supabase/client";

export async function getFeedback() {
  const { data, error } = await supabase.from("feedback").select("*");

  if (error) {
    return { error: error.message };
  }
  return data;
}
