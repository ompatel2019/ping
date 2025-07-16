// src/app/(marketing)/how-it-works/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Get started in just a few simple steps. Our platform is designed to be intuitive and efficient, so you can focus on what matters most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">1</div>
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-gray-600 text-center">
              Create your free account in seconds. No credit card required to get started.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">2</div>
            <h2 className="text-2xl font-semibold mb-2 text-center">Set Up Your Workspace</h2>
            <p className="text-gray-600 text-center">
              Customize your workspace, invite your team, and connect your favorite tools.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">3</div>
            <h2 className="text-2xl font-semibold mb-2">Start Collaborating</h2>
            <p className="text-gray-600 text-center">
              Launch your first project, assign tasks, and track progress—all in one place.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>
            Need help getting started? <a href="/contact" className="text-blue-600 hover:underline">Contact our support team</a> for a personalized walkthrough.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page