import React from "react";

const DashboardPage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-start py-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 tracking-tight drop-shadow-lg">
          Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          Welcome to your dashboard! Here you can view your activity, manage
          your account, and see recent feedback.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md flex flex-col items-center border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Recent Feedback
            </h2>
            <ul className="w-full">
              <li className="text-gray-500 text-center">
                No feedback submitted yet.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
