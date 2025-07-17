"use client";

import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useActionState } from "react";
import { addFeedback } from "@/app/actions/addFeedback";

const initialState = {
  error: "",
};

const WidgetForm = ({
  setShowPopup,
}: {
  setShowPopup: (show: boolean) => void;
}) => {
  const [state, formAction, pending] = useActionState(
    addFeedback,
    initialState
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 min-w-[320px] min-h-[120px] flex flex-col items-center justify-center">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer" />
        </button>
        <form
          className="flex flex-col justify-center gap-2"
          action={formAction}
        >
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 text-left"
          >
            Feedback
          </label>
          {state.error && (
            <p className="text-red-500 text-sm mt-1">{state.error}</p>
          )}
          <textarea
            placeholder="Message"
            className="w-full p-2 rounded-md border border-gray-300"
            name="feedback"
            id="feedback"
          />
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            {pending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WidgetForm;
