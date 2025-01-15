import React from "react";

export interface PostType {
  id: number;
  title: React.ReactNode;
  content: React.ReactNode;
  category: string;
  deadline?: string;
  tags: string[];
  createdAt: string;
  parentId?: number | null;
}
