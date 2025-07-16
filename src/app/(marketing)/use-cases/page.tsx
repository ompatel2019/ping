// src/app/(marketing)/use-cases/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4">
        <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          See how different teams use our feedback platform to build better products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Use Case 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Product Teams</h2>
            <p className="text-gray-600 mb-4 text-center">
              Collect user insights to validate features and inform your product roadmap.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Feature feedback</li>
              <li>User satisfaction surveys</li>
              <li>Beta testing feedback</li>
            </ul>
          </div>
          {/* Use Case 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-600 mb-4 text-center">
              Gather user experience data and identify common pain points to improve support.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Support satisfaction</li>
              <li>Help article feedback</li>
              <li>Issue reporting</li>
            </ul>
          </div>
          {/* Use Case 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Marketing Teams</h2>
            <p className="text-gray-600 mb-4 text-center">
              Learn what resonates with your audience to optimize your messaging and campaigns.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Website feedback</li>
              <li>Campaign effectiveness</li>
              <li>Content suggestions</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>
            Have a unique use case? <a href="/contact" className="text-blue-600 hover:underline">Let&apos;s discuss</a> how we can help.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page