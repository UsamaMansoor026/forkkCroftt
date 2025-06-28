import React from "react";
import { SectionHeading } from "./index";
import { blogs } from "../assets";
import Blog from "./cards/Blog";

const Blogs = () => {
  return (
    <section className="global-padding global-section">
      <SectionHeading
        isCenter={true}
        mainHeading="Blogs"
        subHeading="Recent Posts"
      />

      {/* Blogs List Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-16">
        {blogs.slice(0, 3).map((blog) => {
          return <Blog blog={blog} />;
        })}
      </div>
    </section>
  );
};

export default Blogs;
