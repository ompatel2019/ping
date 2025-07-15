// src/components/layout/NavLink.tsx
import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`nav-link ${active ? "underline" : "text-foreground"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;  
