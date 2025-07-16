// src/components/marketing/Footer.tsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-bold text-white">Ping</span>
          <p className="mt-2 text-gray-400 text-sm max-w-xs">
            Helping teams collect and act on user feedback to build better products.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h3 className="font-semibold text-white mb-2">Product</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/how-it-works" className="hover:underline text-gray-300">How it Works</a>
              </li>
              <li>
                <a href="/pricing" className="hover:underline text-gray-300">Pricing</a>
              </li>
              <li>
                <a href="/use-cases" className="hover:underline text-gray-300">Use Cases</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/docs" className="hover:underline text-gray-300">Documentation</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-300">Support</a>
              </li>
              <li>
                <a href="/blog" className="hover:underline text-gray-300">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/terms" className="hover:underline text-gray-300">Terms</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline text-gray-300">Privacy</a>
              </li>
              <li>
                <a href="/gdpr" className="hover:underline text-gray-300">GDPR</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ping. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer