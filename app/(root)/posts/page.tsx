import React from "react";
import { SiSecurityscorecard } from "react-icons/si";

import Post from "@/components/feed/Post";
import { PostType } from "@/constants/Types";

const MyPosts = async () => {
  const response = await fetch(`/api/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await response.json();
  console.log(response);
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
