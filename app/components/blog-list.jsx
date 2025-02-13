"use client";

import { useEffect, useState } from "react";
import Blog from "./blog-summary.jsx";
import { getLatestPosts } from "@/_lib/data-service.js";
export default function BlogList() {
  const [postNum, setPostNum] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getLatestPosts(postNum);
        setIsLoading(false);
        setBlogs((b) => [...b, ...data]);
        // setBlogs(data)
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchLatestPosts();
  }, [postNum]);

  return (
    <div className="overflow-hidden py-4">
      <h1 className="font-bold text-xl mb-4 pb-4 border-b text-right">
        <p>آخرین نوشته ها</p>
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
            onClick={() => setPostNum((num) => num + 5)}
            className="py-1 px-2 border rounded-lg hover:border-blue-400"
          >
            {isLoading ? (
              <p>در حال دریافت...</p>
            ) : (
              <p onClick={() => setPostNum((perv) => perv + 6)}>نمایش بیشتر</p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
