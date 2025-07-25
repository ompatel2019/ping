// src/app/(auth)/login/page.tsx
"use client";

import { useActionState } from "react";
import { login, signInWithGoogle } from "@/app/actions/auth/login";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initialState = {
  error: "",
};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link href="/">
        <Button className="absolute top-4 left-4 bg-blue-600 text-white">
          Go Back
        </Button>
      </Link>
      <form
        action={formAction}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
        autoComplete="off"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {state?.error && (
          <div className="mb-4 p-2 bg-red-100 text-red-800 rounded text-center">
            {state.error}
          </div>
        )}
        <div>
          <label htmlFor="email" className="block font-medium text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded p-2"
            placeholder="admin@gmail.com"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium text-sm mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border rounded p-2"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            minLength={6}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white"
          disabled={pending}
        >
          {pending ? "Signing In..." : "Sign In"}
        </Button>
        <Link href="/signup" className="w-full">
          <Button className="w-full bg-gray-600 text-white">
            Create an account
          </Button>
        </Link>
      </form>
      <form action={signInWithGoogle}>
        <Button>Sign in with Google</Button>
      </form>
    </section>
  );
}
