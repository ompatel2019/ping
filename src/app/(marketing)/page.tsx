// src/app/(marketing)/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">
          Collect User Feedback That Matters
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Transform your product decisions with real user insights. Our simple yet
          powerful feedback collection platform helps you gather, analyze, and act
          on user feedback in minutes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Simple Integration</h2>
            <p className="text-gray-600 mb-4 text-center">
              Add our feedback widget to your site with just one line of code.
              Start collecting insights instantly.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>One-line installation</li>
              <li>No-code configuration</li>
              <li>Works everywhere</li>
            </ul>
          </div>
          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Smart Analytics</h2>
            <p className="text-gray-600 mb-4 text-center">
              Turn feedback into actionable insights with our powerful dashboard
              and analysis tools.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Real-time responses</li>
              <li>Trend analysis</li>
              <li>Sentiment tracking</li>
            </ul>
          </div>
          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">User Management</h2>
            <p className="text-gray-600 mb-4 text-center">
              Engage with your users directly and turn feedback into meaningful
              conversations.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Direct responses</li>
              <li>User segmentation</li>
              <li>Follow-up tools</li>
            </ul>
          </div>
        </div>
        <Link href="/how-it-works">
          <Button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg font-medium">
            See How It Works
          </Button>
        </Link>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Ready to start collecting feedback?{" "}
            <a
              href="/contact"
              className="text-blue-600 hover:underline"
            >
              Try our demo widget
            </a>{" "}
            below.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
