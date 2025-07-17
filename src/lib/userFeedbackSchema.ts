import { z } from "zod";

export const feedbackSchema = z.object({
  feedback: z.string().min(1, { message: "Feedback is required" }),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
