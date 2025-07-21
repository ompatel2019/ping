import { z } from "zod";

export const feedbackSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  feedback: z.string().min(1, { message: "Feedback is required" }),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
