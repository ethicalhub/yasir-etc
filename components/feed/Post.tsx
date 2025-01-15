import { SlOptionsVertical } from "react-icons/sl";

import { PostType } from "@/constants/Types";

import UserFeedCard from "../uiComponent/userFeedCard";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div key={post.id} className="max-w-2xl rounded-xl bg-white px-8 py-6">
      <div className="flex items-center justify-between">
        <UserFeedCard size={"small"} />
        <SlOptionsVertical className="size-4 cursor-pointer" />
        {/* This should contain option for flag post, advise correction/feedback, share */}
      </div>
      <div className="my-4 w-full text-lg font-light">{post.content}</div>
      <h2 className="text-secondary">{post.title}</h2>

      <div className="mt-2 flex items-center justify-between gap-4">
        <small className="">Tags: {post.tags.join(", ")}</small>
        <p className="my-1 text-xs font-medium text-blue">
          Deadline : {post.deadline}
        </p>
        <small className="rounded-lg bg-secondary px-3 py-[6px] text-sm font-light tracking-wider text-dark">
          {post.category.toLowerCase()}
        </small>
      </div>
    </div>
  );
};

export default Post;
