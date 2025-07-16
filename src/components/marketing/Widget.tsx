// src/components/marketing/Widget.tsx
import React from "react";

const Widget = () => {

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="rounded-full w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-2xl cursor-pointer transition-transform hover:scale-105 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 group"
        aria-label="Open Widget"
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              d="M12 4v16m8-8H4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Widget;
