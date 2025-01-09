import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Link href={blog.link} className="rounded-lg border border-secondary">
      <div>
        <Image
          src={blog.imageUrl}
          height={197}
          alt={blog.title}
          width={350}
          className="w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="line-clamp-1 text-lg text-secondary">{blog.title}</h4>
        <p className="mb-4 mt-2 line-clamp-2 text-sm text-dark">
          {blog.content}
        </p>

        {/* Bookmark option directly, it'll be visible in user profile */}
      </div>
    </Link>
  );
};

export default BlogCard;
