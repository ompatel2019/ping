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
      <nav className="flex justify-around items-center responsivePad">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10"
        />
        <ul className="hidden sm:flex items-center gap-4">
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
        </ul>
        <div className="flex gap-2">
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
