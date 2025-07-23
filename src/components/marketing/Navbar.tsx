// src/components/marketing/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "../layout/NavLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getClientUser } from "@/lib/supabase/auth-client";
import { signout } from "@/app/actions/auth/signout";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const user = await getClientUser();
      setIsLoggedIn(!!user);
      setLoading(false);
    };
    checkUser();
  }, []);

  return (
    <nav className="flex justify-between items-center responsivePad">
      <div className="w-10 h-10 rounded-full bg-blue-500"></div>
      <ul className="hidden sm:flex justify-center items-center gap-4">
        <li>
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/use-cases" active={pathname === "/use-cases"}>
            Use Cases
          </NavLink>
        </li>
        <li>
          <NavLink href="/pricing" active={pathname === "/pricing"}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink href="/how-it-works" active={pathname === "/how-it-works"}>
            How It Works
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-2">
        {loading ? null : isLoggedIn ? ( // 🔒 Only render after user status is known
          <>
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
            <form action={signout}>
              <Button variant="outline" className="bg-blue-500 text-white">
                Logout
              </Button>
            </form>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline" className="bg-blue-500 text-white">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
