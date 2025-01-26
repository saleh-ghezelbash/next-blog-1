import SameCategory from "@/app/components/same-category";
import CommentList from "@/app/components/comment-list";
import Link from "next/link";
import { FaInbox } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import {
  getAuthorById,
  getPostById,
  getPostComments,
  getPostLikesNumber,
  getSemilarPostsByCategoryId,
  getTagsByPostId,
} from "@/_lib/data-service";

export default async function Blog({ params }) {
  const id = await params.id;
  // let [isLiked, setIsLiked] = useState(false)

  const post = await getPostById(id);
  const [author, postsCategory, comments, likesNum, tags] = await Promise.all([
    getAuthorById(post.user_id),
    getSemilarPostsByCategoryId(post.category_id),
    getPostComments(post.id, post.user_id),
    getPostLikesNumber(post.id),
    getTagsByPostId(post.id),
  ]);
  // const author = await getAuthorById(post.user_id);
  // const postsCategory = await getSemilarPostsByCategoryId(post.category_id);
  // const comments = await getPostComments(post.id, post.user_id);

  function getDateFormat(uDate, option) {
    // let d = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    let d = new Date(uDate).toLocaleDateString("fa-IR");
    return d;
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div style={{ direction: "rtl" }} className="px-2">
        <div className="my-8 flex items-center gap-2">
          <FaInbox size={24} color="gray" />
          <span className="font-bold text-lg text-blue-700 hover:text-black">
            <Link href={`/search?type=cat&catid=${post.category.id}`}>
              {post.category.name}
            </Link>
          </span>
        </div>
        <div className="text-5xl font-bold my-4">{post?.title}</div>
        <div style={{ direction: "ltr" }} className="my-2 text-right">
          {/* <span>آخرین به‌روزرسانی: ۲۷ آذر ۱۴۰۳</span> */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center justify-between gap-6">
              <div className="flex gap-2 items-center">
                <span>{likesNum}</span>
                <FaRegHeart size={20} />
              </div>
              <div className="flex gap-2 items-center">
                <span>{comments.length}</span>
                <FaRegCommentDots size={20} />
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <span>{getDateFormat(post.created_at)}</span>
              <span>{author.name}</span>
            </div>
          </div>
        </div>
        <div className="my-8 relative h-fit w-full overflow-hidden rounded-lg">
          <img
            alt={post.title}
            className="mx-auto rounded-lg transition-opacity duration-300 opacity-100"
            // src="https://blog.faradars.org/wp-content/uploads/2022/02/metonymy-in-persian-cover.jpg.webp"
            src={post.image ? post.image : "/images/blog.png"}
            width="1000"
            height="720"
          />
        </div>
        <div className="my-4">{post?.body}</div>
        {/* <div className="flex gap-2 items-center my-16 justify-center border-t p-4">
                    <span>آیا این مطلب برای شما مفید بود؟</span>
                    <div className="cursor-pointer">
                        {isLiked ? <FaHeart size={24} color="red" onClick={() => setIsLiked(!isLiked)} /> : <FaRegHeart size={24} color="red" onClick={() => setIsLiked(!isLiked)} />}
                    </div>
                </div> */}
        <div className="post-tags my-10 print:hidden">
          <div className="text-slate-500 font-extrabold border-b border-slate-200 py-2 mb-2">
            برچسب‌ها
          </div>
          <div className="collapsible-tags">
            <div className="collapsible-tags-content overflow-hidden relative max-h-[31px]">
              <div className="collapsible-tags-content-inner">
                {tags.map((tag) => (
                  <div className="rounded-md px-2 py-1 text-sm border hover:border-blue-400 hover:shadow-md inline-block cursor-pointer mx-2">
                    <Link href={`/search?type=tag&tagid=${tag.id}`}>
                      {tag.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="post-author flex flex-col md:flex-row items-center md:items-start w-full my-8 mx-auto p-8 border border-slate-200 rounded-lg">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                loading="lazy"
                src={author.avatar ? author.avatar : "/images/user.png"}
                width="96"
                height="96"
                alt={author.name}
              />
            </div>
          </div>
          <div className="md:mr-5">
            <div className="text-orange-500 text-lg text-center md:text-start font-black mb-4 mt-2 md:mt-0">
              <Link href={`/author/${author.id}`}>{author.name}</Link>
            </div>
            <div className="text-slate-600 font-light text-justify leading-loose">
              {author.bio}
            </div>
          </div>
        </div>
        <div className="my-8">
          <p className="my-2 p-2 border-b">ارسال کامنت</p>
          <form className="my-4 bg-gray-100 rounded-md p-4">
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 text-sm text-slate-600 mt-4">
                  نام
                </label>
                <input
                  type="text"
                  className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm text-slate-600 mt-4">
                  ایمیل
                </label>
                <input
                  type="text"
                  className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                />
              </div>
            </div>

            <div className="w-full mt-6">
              <label className="block mb-1 text-sm text-slate-600 mt-4">
                متن کامنت
              </label>
              <textarea
                className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                rows="10"
              ></textarea>
            </div>

            <button className="mt-4 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              ارسال
            </button>
          </form>
        </div>
        <div className="my-8">
          <p className="my-2 p-2 border-b">نظرات کاربران</p>
          <CommentList items={comments} />
        </div>
        <SameCategory items={postsCategory} />
      </div>
    </div>
  );
}
