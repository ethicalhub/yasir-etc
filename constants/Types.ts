export type PostType = {
  id: number | string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
  parentId?: number | null;
};
