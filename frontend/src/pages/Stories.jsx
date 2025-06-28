import React from "react";
import { Blogs, PageHeader } from "../components";
import { blogs } from "../assets";
import Blog from "../components/cards/Blog";

const Stories = () => {
  return (
    <>
      <PageHeader heading="Our Stories" targetLink="Blog" />

      <div className="global-padding global-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-16">
        {blogs.map((blog) => {
          return <Blog blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Stories;
