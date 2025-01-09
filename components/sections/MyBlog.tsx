import React from "react";
import { ImBlog } from "react-icons/im";

import { blogs } from "@/constants/StaticData";

import { Button } from "../uiComponent";
import BlogCard from "../uiComponent/BlogCard";

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
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default MyBlog;
