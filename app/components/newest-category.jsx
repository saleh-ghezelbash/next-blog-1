import { getLatestPostsByCategoryName } from "@/_lib/data-service";
import Image from "next/image";
import Link from "next/link";

export default async function NewestCategoryList({ category }) {
  const posts = await getLatestPostsByCategoryName(category);

  return (
    <div className="border overflow-hidden rounded-md p-4 text-right">
      <h1 className="font-bold text-xl mb-4 pb-4 border-b">
        <p>تازه های {posts[0]?.category.name_fa}</p>
      </h1>

      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="my-2" key={post.id}>
              <div className="flex justify-between items-center">
                <Link href={`/blog/${post.id}`}>
                  <Image
                    className="rounded-md w-20 h-20"
                    src={post.image ? post.image : "/images/blog.png"}
                    width={75}
                    height={75}
                  />
                </Link>
                <Link href={`/blog/${post.id}`}>
                  <h2 className="font-bold text-lg">{post.title}</h2>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">موردی برای نمایش وجود ندارد</p>
        )}
      </div>
    </div>
  );
}
