// src/app/(marketing)/pricing/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-lg text-gray-700 mb-8">
          Choose the plan that fits your needs. Transparent pricing, no hidden fees.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Basic</h2>
            <p className="text-3xl font-bold mb-4">$9<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ 1 Project</li>
              <li>✔️ 5 GB Storage</li>
              <li>✔️ Email Support</li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Choose Basic</button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border-2 border-blue-600 scale-105">
            <h2 className="text-2xl font-semibold mb-2">Pro</h2>
            <p className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ 10 Projects</li>
              <li>✔️ 50 GB Storage</li>
              <li>✔️ Priority Email Support</li>
              <li>✔️ Team Collaboration</li>
            </ul>
            <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Choose Pro</button>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-3xl font-bold mb-4">Contact Us</p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ Unlimited Projects</li>
              <li>✔️ Unlimited Storage</li>
              <li>✔️ Dedicated Support</li>
              <li>✔️ Custom Integrations</li>
            </ul>
            <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition">Contact Sales</button>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>All plans come with a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}

export default page