// src/app/actions/auth/signout.ts
"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerActionClient } from "@/lib/supabase/server";

export async function signout() {
  const supabase = createSupabaseServerActionClient();
  await supabase.auth.signOut();
  redirect("/");
}
