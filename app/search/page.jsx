'use server'

import { getPostBySearchValue, getPostsByCategoryId } from "@/_lib/data-service";
import Blog from "../components/blog-summary";
import EditorSwiper from "../components/editor-swiper.jsx";

export default async function Search({ searchParams }) {
  let data = null;
  let searchVal = null;
  if (searchParams.catid) {
    data = await getPostsByCategoryId(searchParams.catid);
    searchVal = data[0].category.name;
  } else if (searchParams.tagid) {
    getPostByTagSlug(searchParams.tag);
  } else if (searchParams.s) {
    data = await getPostBySearchValue(searchParams.s);
    searchVal = searchParams.s
  } else {
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <div
          className="mb-4 mt-8 p-2 border-b text-right"
          style={{ direction: "rtl" }}
        >
          {/* <p>جستجو درباره: <span>{searchVal}</span></p>
                    <p>برچسب: <span>{searchVal}</span></p> */}
          {/* <p>دسته بندی: <span>{ searchVal }</span></p> */}
          <p>
            دسته بندی: <span>{searchVal}</span>
          </p>
        </div>

        <div className="my-2 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          {/* {
                        data.post.length > 0 ? data.post.map(p => (
                            <Blog post={p} />
                        )) : <p>پستی برای نمایش وجود ندارد</p>
                    } */}
          {data.map((item) => (
            <Blog item={item} key={item.id} />
          ))}
        </div>

        <div className="my-2 flex items-center justify-center">
          <button className="py-1 px-2 border rounded-md hover:border-blue-400 hover:shadow-md">
            نمایش بیشتر
          </button>
        </div>
      </div>
      <div className="mb-6">
        <EditorSwiper />
      </div>
    </div>
  );
}
