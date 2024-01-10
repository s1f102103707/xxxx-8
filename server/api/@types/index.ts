/* eslint-disable */
export type User = {
  id: string;
  email: string;
  name?: string | null | undefined;
};

export type Post = {
  id: string;
  title: string;
  content?: string | null | undefined;
  published: boolean;
  authorId: string;
};

export type Comment = {
  id: string;
  text: string;
  postId: string;
  authorId: string;
};
