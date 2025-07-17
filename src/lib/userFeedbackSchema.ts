import { z } from "zod";

export const feedbackSchema = z.object({
  feedback: z.string().min(1, { message: "Feedback is required" }),
  userId: z.string().min(1, { message: "User ID is required" }),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
