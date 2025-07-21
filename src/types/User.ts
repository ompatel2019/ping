// src/types/User.ts
export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Feedback {
  id: number;
  title: string;
  feedback: string;
  created_at: string;
  is_complete: boolean;
}
