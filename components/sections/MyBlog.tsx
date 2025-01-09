import Link from "next/link";
import React from "react";
import { ImBlog } from "react-icons/im";

import { ROUTES } from "@/constants/ROUTES";
import { blogs } from "@/constants/StaticData";

import { Button } from "../uiComponent";
import BlogCard from "../uiComponent/BlogCard";

const MyBlog = () => {
  return (
    <section id="blogs" className="section-layout">
      <div className="title-with-action">
        <h3 className="section-title">
          <ImBlog />
          <span>Blogs & Interesting articles</span>
        </h3>
        <Link href={ROUTES.EXT_BLOG}>
          <Button className="" variant="secondary">
            View All Blogs
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 items-center gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default MyBlog;
