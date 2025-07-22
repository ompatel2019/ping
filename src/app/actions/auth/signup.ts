// src/app/actions/auth/signup.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { signUpSchema } from "@/lib/validators/signUpSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(prevState: unknown, formData: FormData) {
  const user = signUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!user.success) {
    return { error: user.error.issues.map((e) => e.message).join(", ") };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(user.data);

  if (error) {
    return { error: error.message };
  }
  revalidatePath("/", "layout");
  redirect("/dashboard");
}
