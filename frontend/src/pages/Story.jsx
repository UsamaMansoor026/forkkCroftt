import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "../components";
import { blogs } from "../assets";
import DOMPurify from "dompurify";

const Story = () => {
  const { id } = useParams();
  const [storyData, setStoryData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStory = () => {
      try {
        setLoading(true);
        const data = blogs.find((blog) => blog.id === Number(id));
        if (data) {
          setStoryData(data);
        }
      } catch (err) {
        console.error("Error fetching story:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  return (
    <>
      <PageHeader heading="Our Story" targetLink="" />

      <section className="global-padding global-section max-w-[950px] mx-auto">
        <img
          src={storyData?.image}
          alt=""
          className="w-full aspect-[16/9] object-cover"
        />
        <h2 className="text-4xl text-primary-text font-semibold my-5">
          {storyData?.title}
        </h2>
        <p className="text-sm text-captions mb-2">{storyData?.date}</p>
        <p
          className="prose leading-[1.7] text-justify"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(storyData?.content),
          }}
        />
      </section>
    </>
  );
};

export default Story;
