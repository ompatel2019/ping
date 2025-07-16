// src/app/(marketing)/contact-us/page.tsx
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have questions about collecting user feedback? Our team is here to help you get started.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="How can we help you with user feedback collection?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>Need immediate assistance?</p>
          <p className="mt-2">
            Email us at{" "}
            <a href="mailto:support@ping.com" className="text-blue-600 hover:underline">
              support@ping.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default page