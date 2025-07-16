// src/app/(marketing)/pricing/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-700 mb-8">
          Start collecting feedback for free. Upgrade as your needs grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Starter</h2>
            <p className="text-3xl font-bold mb-4">Free<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ 100 responses/mo</li>
              <li>✔️ Basic widget customization</li>
              <li>✔️ Email notifications</li>
              <li>✔️ Basic analytics</li>
            </ul>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Start Free</button>
          </div>
          {/* Growth Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border-2 border-blue-600 scale-105">
            <h2 className="text-2xl font-semibold mb-2">Growth</h2>
            <p className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ Unlimited responses</li>
              <li>✔️ Advanced customization</li>
              <li>✔️ User segmentation</li>
              <li>✔️ Trend analysis</li>
              <li>✔️ API access</li>
            </ul>
            <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Choose Growth</button>
          </div>
          {/* Scale Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Scale</h2>
            <p className="text-3xl font-bold mb-4">$99<span className="text-base font-normal">/mo</span></p>
            <ul className="mb-6 text-gray-600">
              <li>✔️ Everything in Growth</li>
              <li>✔️ Multiple team members</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ Priority support</li>
              <li>✔️ Advanced analytics</li>
            </ul>
            <button className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition">Choose Scale</button>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>No credit card required to start. Upgrade or downgrade anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default page