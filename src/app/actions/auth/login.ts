// src/app/actions/auth/login.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Provider } from "@supabase/supabase-js";

export async function login(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signInWith(provider: Provider) {
  const supabase = await createClient();
  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log(data);

  if (error) {
    console.error(error);
  }

  revalidatePath("/", "layout");
  redirect(data.url ?? "/");
}

const signInWithGoogle = async () => {
  await signInWith("google" as Provider);
};

export { signInWithGoogle };
