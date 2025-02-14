import { getAuthorById, getLatestPosts } from "@/_lib/data-service";
import Blog from "../../components/blog-summary";
import EditorSwiper from "../../components/editor-swiper.jsx";

export default async function Author({ params }) {
  const id = (await params).id;
  const author = await getAuthorById(id);
  const posts = await getLatestPosts(id, undefined);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div
        style={{ direction: "rtl" }}
        className="bg-blue-600 px-4 lg:px-16 shadow-lg"
      >
        <div className="flex items-center h-72">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                loading="lazy"
                src={author.avatar ? author.avatar : "/images/avatar.jpg"}
                width="96"
                height="96"
                alt={author.name}
              />
            </div>
          </div>
          <div className="pr-6 w-full">
            <div className="text-white text-lg md:text-xl font-extrabold mb-3">
              {author.name}
            </div>
            <div className="text-sm md:text-base text-white font-extralight">
              {author.bio}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4">
        <p className="text-right">:مقاله های منتشر شده توسط این نویسنده</p>
      </div>
      <div>
        {posts.length > 0 ? (
          <div className="my-2 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            {posts.map((post) => (
              <Blog item={post} key={post.id} />
            ))}
          </div>
        ) : (
          <p className="p-8 text-center">موردی یافت نشد</p>
        )}
      </div>
      <div className="mb-6">
        <EditorSwiper />
      </div>
    </div>
  );
}
