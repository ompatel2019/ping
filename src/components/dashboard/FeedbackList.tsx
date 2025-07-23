// src/components/dashboard/FeedbackList.tsx
"use client";

import { useEffect, useState } from "react";
import { Feedback } from "@/types/User";
import { CircleCheckBig, Circle, Trash2 } from "lucide-react";
import { updateFeedback } from "@/app/actions/feedback/updateFeedback";
import { deleteFeedback } from "@/app/actions/feedback/deleteFeedback";
import { createClient } from "@/lib/supabase/client";

export const FeedbackList = ({ feedback }: { feedback: Feedback[] }) => {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>(feedback);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel("realtime-feedback")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "feedback" },
        async () => {
          const { data, error } = await supabase
            .from("feedback")
            .select("*")
            .order("created_at", { ascending: false });

          if (!error) {
            setFeedbackList(data as Feedback[]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
          Recent Feedback
        </h2>
        <ul className="space-y-4">
          {feedbackList.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <form action={updateFeedback}>
                  <input type="hidden" name="feedbackId" value={item.id} />
                  <input
                    type="hidden"
                    name="isComplete"
                    value={String(item.is_complete)}
                  />
                  <button
                    className="text-gray-400 hover:text-blue-500 transition cursor-pointer"
                    aria-label="Mark as complete"
                    type="submit"
                  >
                    {item.is_complete ? (
                      <CircleCheckBig className="w-5 h-5 mt-1 text-blue-500" />
                    ) : (
                      <Circle className="w-5 h-5 mt-1 text-blue-500" />
                    )}
                  </button>
                </form>

                <div className="flex flex-col text-sm text-gray-700">
                  <p
                    className={`text-lg font-bold ${
                      item.is_complete ? "line-through" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className={`font-medium ${item.is_complete ? "" : ""}`}>
                    {item.feedback}
                  </p>
                  <span className="text-xs text-gray-400 mt-1">
                    {new Date(item.created_at).toLocaleString("en-GB", {
                      dateStyle: "short",
                      timeStyle: "medium",
                      timeZone: "Australia/Sydney",
                    })}
                  </span>
                </div>
              </div>

              <form action={deleteFeedback}>
                <input type="hidden" name="feedbackId" value={item.id} />
                <button
                  type="submit"
                  className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
