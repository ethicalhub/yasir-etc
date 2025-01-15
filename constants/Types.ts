import React from "react";

export interface PostType {
  id: number;
  title: string;
  content: React.ReactNode;
  category: string;
  tags: string[];
  createdAt: string;
  parentId: number | null;
}
