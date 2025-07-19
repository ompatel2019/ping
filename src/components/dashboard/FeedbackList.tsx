// src/components/dashboard/FeedbackList.tsx
"use client";
import { Feedback } from "@/types/User";
import { CircleCheckBig, Circle, Trash2 } from "lucide-react";
import { updateFeedback } from "@/app/actions/feedback/updateFeedback";
import { deleteFeedback } from "@/app/actions/feedback/deleteFeedback";

export const FeedbackList = ({ feedback }: { feedback: Feedback[] }) => {
  return (
    <div className="w-full">
      <div className="bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
          Recent Feedback
        </h2>
        <ul className="space-y-4">
          {feedback.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <form action={updateFeedback}>
                  <input type="hidden" name="feedbackId" value={item.id} />
                  <button
                    className="text-gray-400 hover:text-blue-500 transition"
                    aria-label="Mark as complete"
                    type="submit"
                  >
                    {item.isComplete ? (
                      <CircleCheckBig className="w-5 h-5 mt-1 text-blue-500" />
                    ) : (
                      <Circle className="w-5 h-5 mt-1 text-blue-500" />
                    )}
                  </button>
                </form>
                <div className="flex flex-col text-sm text-gray-700">
                  <p
                    className={`font-medium ${
                      item.isComplete ? "line-through" : ""
                    }`}
                  >
                    {item.feedback}
                  </p>
                  <span className="text-xs text-gray-400 mt-1">
                    {new Date(item.createdAt).toLocaleString("en-GB", {
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
