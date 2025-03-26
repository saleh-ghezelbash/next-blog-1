import SameCategory from "@/app/components/same-category";
import CommentList from "@/app/components/comment-list";
import Link from "next/link";
import { FaInbox } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
// import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import {
  getAuthorById,
  getPostById,
  getPostComments,
  getPostLikesNumber,
  getSemilarPostsByCategoryId,
  getTagsByPostId,
  replyMessage,
} from "@/_lib/data-service";
import { getShamsiDate } from "@/utils/format-date";
import Like from "@/app/components/like";

export default async function Blog({ params }) {
  const id = await params.id;
  const user = null;
  // let [isLiked, setIsLiked] = useState(false)

  const post = await getPostById(id);
  const [author, postsCategory, comments, likesNum, tags] = await Promise.all([
    getAuthorById(post.user_id),
    getSemilarPostsByCategoryId(post.category_id),
    getPostComments(post.id),
    getPostLikesNumber(post.id),
    getTagsByPostId(post.id),
  ]);

  // const author = await getAuthorById(post.user_id);
  // const postsCategory = await getSemilarPostsByCategoryId(post.category_id);
  // const comments = await getPostComments(post.id, post.user_id);

  async function reply(formData) {
    'use server'

    const message = formData.get('reply')
    if (!message) return;
    await replyMessage(message, id, 1, null)
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
              <span>{getShamsiDate(post.created_at)}</span>
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
        <Like />

        <div className="post-tags my-10 print:hidden">
          <div className="text-slate-500 font-extrabold border-b border-slate-200 py-2 mb-2">
            برچسب‌ها
          </div>
          <div className="collapsible-tags">
            <div className="collapsible-tags-content overflow-hidden relative max-h-[31px]">
              <div className="collapsible-tags-content-inner">
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="rounded-md px-2 py-1 text-sm border hover:border-blue-400 hover:shadow-md inline-block cursor-pointer mx-2"
                  >
                    <Link href={`/search?tagid=${tag.id}`}>{tag.name}</Link>
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
          <form action={reply}>
            <textarea
              className="w-full rounded-md p-2"
              rows="5"
              placeholder={"نظر خود را وارد کنید..."}
              name="reply"
            ></textarea>
            <button type="submit" disabled={!user} className="border px-2 py-1 rounded-md cursor-pointer text-xs hover:border-blue-400">
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
