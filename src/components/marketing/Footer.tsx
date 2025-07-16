// src/components/marketing/Footer.tsx
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-bold text-white">Ping</span>
          <p className="mt-2 text-gray-400 text-sm max-w-xs">
            Empowering your business with innovative solutions and dedicated support.
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
                <a href="/features" className="hover:underline text-gray-300">Features</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/about" className="hover:underline text-gray-300">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-300">Contact</a>
              </li>
              <li>
                <a href="/careers" className="hover:underline text-gray-300">Careers</a>
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
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ping. All rights reserved.
      </div>
    </footer>
  )
  return (
    <div>Footer</div>
  )
}

export default Footer