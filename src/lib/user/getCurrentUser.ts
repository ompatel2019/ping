// src/lib/user/getCurrentUser.ts
import { User } from "@/types/User";
import { createSupabaseServerComponentClient } from "@/lib/supabase/server";

export async function getCurrentUser(): Promise<User | null> {
  const supabase = createSupabaseServerComponentClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user as User | null;
}
