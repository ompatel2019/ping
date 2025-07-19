// src/components/dashboard/DashboardNavbar.tsx
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-between items-center responsivePad">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-500"></div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <ul className="hidden sm:flex justify-center items-center gap-4">
        <li>
          <Link href="/logout">
            <Button variant="outline" className="bg-blue-500 text-white">
              Logout
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Button variant="outline" className="bg-blue-500 text-white">
              Home
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavbar;
