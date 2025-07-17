"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useActionState } from "react";
import { signup } from "@/app/actions/signup";

const initialState = {
  error: "",
};

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signup, initialState);
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link href="/">
        <Button className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Go Back
        </Button>
      </Link>
      <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <form
          className="bg-white rounded-lg shadow-md p-8 w-full flex flex-col gap-4"
          action={formAction}
          autoComplete="off"
        >
          {state.error && (
            <p className="text-red-500 text-sm mt-1">{state.error}</p>
          )}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
              name="name"
              autoComplete="name"
              minLength={3}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <div>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                required
                name="email"
                autoComplete="email"
              />
            </div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
              name="password"
              autoComplete="new-password"
              minLength={6}
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
              name="confirm-password"
              autoComplete="new-password"
              minLength={6}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            {pending ? "Creating Account..." : "Create Account"}
          </button>
          <div className="flex justify-between mt-4 text-sm">
            <a href="/login" className="text-blue-600 hover:underline">
              Already have an account?
            </a>
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms
            </a>
          </div>
        </form>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
