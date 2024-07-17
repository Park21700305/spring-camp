// src/types/index.ts
export interface Post {
    id: number;
    author: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }
  