// src/app/not-found.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen responsivePad space-y-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/">
        <Button variant="outline" className="bg-blue-500 text-white">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default notFound;
