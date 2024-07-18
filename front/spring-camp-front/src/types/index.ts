// types/index.ts
export interface IFormInput {
    title: string;
    content: string;
  }

  export interface User {
      memberId: number | null;
      email: string;
      name: string;
  }
  
  export interface BoardResponse {
    id: number;
    writer: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }
  