import { User } from "@/types/User";
import { cookies } from "next/headers";
import users from "@/data/users.json"; // this now must be an array!

export async function getCurrentUser(): Promise<User | null> {
  const userId = (await cookies()).get("userId")?.value;
  if (!userId) return null;

  return users.find((u: User) => u.id === Number(userId)) || null;
}
