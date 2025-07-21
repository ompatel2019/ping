// src/types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  feedback: Feedback[];
}

export interface Feedback {
  id: number;
  title: string;
  feedback: string;
  created_at: string;
  is_complete: boolean;
}