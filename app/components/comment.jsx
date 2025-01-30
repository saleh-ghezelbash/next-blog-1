"use client"
import { getShamsiDate } from "@/utils/format-date";
import Link from "next/link";

export default function Comment({ comment }) {
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment comment={comment} />;
      });
    
    return (
        <div className="border-r p-4 mt-3">
            <div>
                <div className="flex items-center mb-6 gap-2">
                    <img src={comment.user.avatar ? comment.user.avatar : '/images/avatar.jpg'} alt="Avatar" className="w-12 h-12 rounded-full" />
                    <div>
                        <Link href={`/user/${comment.user.id}`} className="text-lg font-medium text-gray-800">{comment.user.name}</Link>
                        <div className="text-gray-500">{getShamsiDate(comment.created_at)}</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">{comment.body}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <button className="border px-2 py-1 rounded-md cursor-pointer text-xs hover:border-purple-300">پاسخ</button>
                    </div>
                </div>
            </div>
            <div>
                {nestedComments}
            </div>
        </div>
    )
}