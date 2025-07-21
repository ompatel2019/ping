// src/lib/supabase/server.ts

import { cookies } from "next/headers";
import {
  createServerComponentClient,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";

// For use in Server Components (page/layout/etc) to read session/user
export const createSupabaseServerComponentClient = () =>
  createServerComponentClient({ cookies });

// For use in Server Actions (login/signup/logout) to write session
export const createSupabaseServerActionClient = () =>
  createServerActionClient({ cookies });
