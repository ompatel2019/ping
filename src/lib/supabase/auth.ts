// src/lib/supabase/auth.ts
import { createSupabaseServerComponentClient } from "./server";

export async function getSession() {
  const supabase = createSupabaseServerComponentClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}
