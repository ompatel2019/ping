// src/app/(marketing)/use-cases/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4">
        <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Discover how our platform empowers teams and individuals across industries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Use Case 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Startups</h2>
            <p className="text-gray-600 mb-4 text-center">
              Accelerate your product development with streamlined collaboration and project management tools.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Rapid prototyping</li>
              <li>Team task tracking</li>
              <li>Easy integrations</li>
            </ul>
          </div>
          {/* Use Case 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Agencies</h2>
            <p className="text-gray-600 mb-4 text-center">
              Manage multiple clients and projects efficiently with robust reporting and permissions.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Client dashboards</li>
              <li>Custom branding</li>
              <li>Automated reports</li>
            </ul>
          </div>
          {/* Use Case 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Enterprises</h2>
            <p className="text-gray-600 mb-4 text-center">
              Scale your operations securely with advanced controls and dedicated support.
            </p>
            <ul className="mb-4 text-gray-500 text-sm list-disc list-inside">
              <li>Single sign-on (SSO)</li>
              <li>Role-based access</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>
            Not sure which use case fits you? <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> to discuss your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page