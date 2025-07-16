// src/app/(marketing)/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Page</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Explore our latest offerings and updates. Discover how our platform
          can help you achieve your goals, whether you&apos;re a startup,
          agency, or enterprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Innovative Solutions
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Leverage cutting-edge technology to streamline your workflow and
              boost productivity.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Automation tools</li>
              <li>Seamless integrations</li>
              <li>Real-time analytics</li>
            </ul>
          </div>
          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-600 mb-4 text-center">
              Our dedicated team is here to help you every step of the way,
              ensuring your success.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>24/7 live chat</li>
              <li>Comprehensive help center</li>
              <li>Personalized onboarding</li>
            </ul>
          </div>
          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Flexible Plans</h2>
            <p className="text-gray-600 mb-4 text-center">
              Choose a plan that fits your needs, with transparent pricing and
              no hidden fees.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Monthly &amp; annual billing</li>
              <li>Free trial available</li>
              <li>Custom enterprise solutions</li>
            </ul>
          </div>
        </div>
        <Link href="/how-it-works">
          <Button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg font-medium">
            Learn More
          </Button>
        </Link>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Have questions?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact our team
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
