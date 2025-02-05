
import { getShamsiDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";

export default function BlogSummary({ item }) {
    return (

        <article className="p-3 mb-5 border border-slate-300 rounded-lg">
            <div className="flex flex-row justify-between gap-2 mb-5">
                <Link className="w-2/6 rounded-lg bg-slate-200 overflow-hidden" href={`/blog/${item.id}`}>
                    <img loading="lazy" src={item.image ? item.image : '/images/blog.png'} width="640" height="360" alt="Participe Passe در فرانسه – به زبان ساده با مثال و تمرین" className="object-cover object-center h-24 md:h-40 w-full" />
                </Link>
                <div className="w-4/6 overflow-hidden flex flex-col justify-between self-stretch text-right">
                    <div>
                        <div className="mb-3">
                            <span className="px-4 py-1 bg-gray-300 rounded-sm text-xs hover:text-blue-400"><Link href={`/search?catid=${item.category.id}`}>{item.category.name_fa}</Link></span>
                        </div>
                        <h2 className="text-slate-900 font-extrabold text-lg md:text-xl">
                            <Link rel="bookmark" href={`/blog/${item.id}`}>{item.title}</Link>
                        </h2>
                        <p className="hidden md:block text-sm text-slate-500 font-extralight mt-2">{item.body}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center justify-between gap-6">
                    <div className="flex gap-2 items-center">
                        <span>{item._count.like}</span>
                        <FaRegHeart size={20} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>{item._count.comment}</span>
                        <FaRegCommentDots size={20} />
                    </div>
                </div>
                <div className="flex gap-3 text-sm">
                    <span>{getShamsiDate(item.created_at)}</span>
                    <Link href={`/author/${item.user.id}`} className="hover:text-blue-400">{item.user.name}</Link>
                </div>
            </div>
        </article>

    )
}