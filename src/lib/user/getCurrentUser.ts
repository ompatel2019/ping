// src/lib/user/getCurrentUser.ts
import { User } from "@/types/User";
import { createServerClient } from "@/lib/supabase/server";

export async function getCurrentUser(): Promise<User | null> {
  const supabase = createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user as User | null;
}
