// src/components/marketing/Navbar.tsx
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../layout/NavLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex justify-between items-center responsivePad">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10"
        />
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
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
