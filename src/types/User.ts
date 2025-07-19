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
  feedback: string;
  createdAt: string;
  isComplete: boolean;
}