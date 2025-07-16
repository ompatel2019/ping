import Widget from "@/components/marketing/Widget";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Start collecting valuable feedback from your users in minutes. Our
          streamlined process makes it simple to gather, manage, and act on user
          insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">
              1
            </div>
            <h2 className="text-2xl font-semibold mb-2">Create Your Form</h2>
            <p className="text-gray-600 text-center">
              Design your feedback form in seconds. Customize it to match your
              brand and collect exactly what you need.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">
              2
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Embed & Share
            </h2>
            <p className="text-gray-600 text-center">
              Add the feedback widget to your website with one line of code or
              share direct feedback links.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 text-2xl font-bold">
              3
            </div>
            <h2 className="text-2xl font-semibold mb-2">Analyze & Respond</h2>
            <p className="text-gray-600 text-center">
              Track feedback in your dashboard, identify trends, and respond to
              users all in one place.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>
            Want to see it in action?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Request a demo
            </a>{" "}
            or try our live widget below.
          </p>
        </div>
      </div>

      <Widget />
    </section>
  );
};

export default page;
