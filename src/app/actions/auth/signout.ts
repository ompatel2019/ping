// src/app/actions/auth/signout.ts
"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signout() {
  (await cookies()).delete("userId");
  redirect("/");
}
