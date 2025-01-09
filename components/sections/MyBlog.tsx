import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImBlog } from "react-icons/im";

import { blogs } from "@/constants/StaticData";

import { Button } from "../uiComponent";

const MyBlog = () => {
  return (
    <section className="flex w-full flex-col gap-8 py-24">
      <div className="items-center justify-between gap-4 md:flex">
        <h3 className="flex-align-center gap-4 text-4xl text-primary">
          <ImBlog />
          <span>Blogs & Interesting articles</span>
        </h3>
        <Button className="" variant="secondary">
          View All Blogs
        </Button>
      </div>

      <div className="grid grid-cols-4 items-center gap-6">
        {blogs.map((blog) => {
          return (
            <Link
              key={blog.id}
              href={blog.link}
              className="rounded-lg border border-secondary p-4"
            >
              <div>
                <Image
                  src={blog.imageUrl}
                  height={197}
                  alt={blog.title}
                  width={350}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h4 className=" line-clamp-1 text-xl text-primary">
                  {blog.title}
                </h4>
                <p className="mb-4 mt-2 line-clamp-2 text-sm text-dark">
                  {blog.content}
                </p>

                {/* Bookmark option directly, it'll be visible in user profile */}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default MyBlog;
