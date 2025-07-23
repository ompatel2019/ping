// src/app/dashboard/page.tsx
import React from "react";
import { FeedbackList } from "@/components/dashboard/FeedbackList";
import { getFeedback } from "../actions/feedback/getFeedback";
import { Feedback } from "@/types/User";
import { getServerUser } from "@/lib/supabase/auth-server";

export const dynamic = "force-dynamic";
const DashboardPage = async () => {
  const feedback = await getFeedback();
  const user = await getServerUser();
  console.log(user);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-start py-16 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-blue-100">
        <FeedbackList feedback={feedback as Feedback[]} />
      </div>
    </div>
  );
};

export default DashboardPage;
