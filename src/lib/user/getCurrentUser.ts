// src/lib/user/getCurrentUser.ts
import { cookies } from "next/headers";
import { promises as fs } from "fs";
import path from "path";
import { User } from "@/types/User";

export async function getCurrentUser(): Promise<User | null> {
  const userId = (await cookies()).get("userId")?.value;
  if (!userId) return null;

  const filePath = path.join(process.cwd(), "src/data/users.json");
  const file = await fs.readFile(filePath, "utf-8");
  const users: User[] = JSON.parse(file);

  return users.find((u: User) => u.id === Number(userId)) || null;
}
