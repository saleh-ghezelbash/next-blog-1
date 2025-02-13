import {
  getPostBySearchValue,
  getPostsByCategoryId,
  getPostsByTagId,
  getTagById,
} from "@/_lib/data-service";
import Blog from "../components/blog-summary";
import EditorSwiper from "../components/editor-swiper.jsx";

export default async function Search({ searchParams }) {
  let data = null;
  let searchVal = null;
  let searchType = 0;

  if (searchParams.catid) {
    data = await getPostsByCategoryId(searchParams.catid);
    searchType = 1;
    searchVal = data[0]?.category.name;
  } else if (searchParams.tagid) {
    data = await getPostsByTagId(searchParams.tagid);
    searchType = 2;
    const tag = await getTagById(searchParams.tagid);
    searchVal = tag?.name;
  } else if (searchParams.s) {
    data = await getPostBySearchValue(searchParams.s);
    searchVal = searchParams.s;
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <div
          className="mb-4 mt-8 p-2 border-b text-right"
          style={{ direction: "rtl" }}
        >
          <p>
            {searchType === 0 ? (
              <span className="font-bold">جستجو درباره :</span>
            ) : searchType === 1 ? (
              <span className="font-bold">دسته بندی :</span>
            ) : (
              <span className="font-bold">برچسب :</span>
            )}{" "}
            <span>{searchVal}</span>
          </p>
        </div>

        {data.length > 0 ? (
          <div className="my-2 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            {data.map((item) => (
              <Blog item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <p className="text-center p-8">موردی یافت نشد</p>
        )}

        {data.length > 0 && (
          <div className="my-2 flex items-center justify-center">
            <button className="py-1 px-2 border rounded-md hover:border-blue-400 hover:shadow-md">
              نمایش بیشتر
            </button>
          </div>
        )}
      </div>
      <div className="mb-6">
        <EditorSwiper />
      </div>
    </div>
  );
}
