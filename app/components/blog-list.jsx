"use client";

import { useEffect, useState } from "react";
import Blog from "./blog-summary.jsx";
import { getLatestPosts, getMostCommentsPosts } from "@/_lib/data-service.js";

export default function BlogList({type}) {
  const [skipCount, setSkipCount] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setIsLoading(true);
      let data;
      try {
        if (type == "latest") {
          data = await getLatestPosts(undefined, 0);
        } else {
          data = await getMostCommentsPosts(0);
        }
        setIsLoading(false);
        setBlogs(data)
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchLatestPosts();
  }, []);

  const loadMore = async () => {
    setIsLoading(true);
    let data;
    try {
      if (type == "latest") {
        data = await getLatestPosts(undefined, skipCount);
      } else {
        data = await getMostCommentsPosts(skipCount);
      }
      setIsLoading(false);
      setBlogs((b) => [...b, ...data]);
      setSkipCount(sc => sc + 6)
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="overflow-hidden py-4">
      <h1 className="font-bold text-xl mb-4 pb-4 border-b text-right">
        {
          type == "latest" ? <p>آخرین نوشته ها</p> : <p>پر بحث ترین ها</p>
        }
      </h1>

      <div>
        {blogs.length > 0 ? (
          blogs.map((blog) => <Blog item={blog} key={blog.id} />)
        ) : (
          <p className="text-center p-8">موردی برای نمایش وجود ندارد</p>
        )}
      </div>
      {blogs.length > 0 && (
        <div className="my-2 flex items-center justify-center">
          <button
            className="py-1 px-2 border rounded-lg hover:border-blue-400"
          >
            {isLoading ? (
              <p>در حال دریافت...</p>
            ) : (
              <p onClick={loadMore}>نمایش بیشتر</p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
