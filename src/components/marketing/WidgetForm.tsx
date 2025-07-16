import React, { useState } from "react";
import { X } from "lucide-react"; 
import { Button } from "../ui/button";

const WidgetForm = ({
  setShowPopup,
}: {
  setShowPopup: (show: boolean) => void;
}) => {
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    setShowPopup(false);
  };
  
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
        <form className="flex flex-col justify-center gap-2" onSubmit={handleSubmit}>
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 text-left"   
          >
            Feedback
          </label>
          <textarea
            placeholder="Message"
            className="w-full p-2 rounded-md border border-gray-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={() => setShowPopup(false)}
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WidgetForm;
