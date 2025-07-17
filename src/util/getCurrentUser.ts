import { User } from "@/types/User";
import { cookies } from "next/headers";
import users from "@/data/users.json";

export async function getCurrentUser(): Promise<User | null> {
  const userId = (await cookies()).get("userId")?.value;
  if (!userId) return null;
  return users.find((u: User) => u.id === Number(userId)) || null;
}
