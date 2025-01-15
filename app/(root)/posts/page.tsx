import React from "react";
import { SiSecurityscorecard } from "react-icons/si";

import Post from "@/components/feed/Post";
import { PostType } from "@/constants/Types";

const posts = [
  {
    id: 1,
    title: "Learning React",
    content: "Today I explored React hooks.",
    category: "Learning",
    tags: ["React", "Hooks"],
    createdAt: "2025-01-15T10:00:00Z",
    parentId: null,
  },
  {
    id: 2,
    title: "Daily Update",
    content:
      "Worked on infinite scrolling. Worked on infinite scrolling. Worked on infinite scrolling. Worked on infinite scrolling. Worked on infinite scrolling.",
    category: "Updates",
    tags: ["Frontend"],
    createdAt: "2025-01-16T08:00:00Z",
    parentId: 1,
  },
  {
    id: 3,
    title: "Daily Notes",
    content:
      "Worked on infinite scrolling. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks. Today I explored React hooks.",
    category: "Updates",
    tags: ["Frontend"],
    createdAt: "2025-01-16T08:00:00Z",
    parentId: 1,
  },
];

const MyPosts = async () => {
  return (
    <section className="section-layout ">
      <h3 className="section-title">
        <SiSecurityscorecard />
        <span>My Posts</span>
      </h3>
      {posts?.map((post: PostType) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
};

export default MyPosts;
