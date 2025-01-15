import { PostType } from "@/constants/Types";

import UserFeedCard from "../uiComponent/userFeedCard";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div key={post.id} className="max-w-2xl rounded-xl bg-white px-8 py-6">
      <UserFeedCard size={"small"} />
      <div className="my-6 w-full text-lg font-light">{post.content}</div>
      <h2 className="text-secondary">{post.title}</h2>
      <div className="mt-2 flex items-center justify-between">
        <small className="">Tags: {post.tags.join(", ")}</small>
        <small className="rounded-lg bg-secondary px-3 py-[6px] text-sm font-light tracking-wider text-dark">
          {post.category.toLowerCase()}
        </small>
      </div>
    </div>
  );
};

export default Post;
