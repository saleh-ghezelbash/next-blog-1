"use client"
import { getShamsiDate } from "@/utils/format-date";
import Link from "next/link";
import { useState } from "react";

export default function Comment({ comment }) {
    const [showReplyForm, setShowReplyForm] = useState(false)
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment comment={comment} key={comment.id}/>;
    });

    return (
        <div className="border-r p-4 mt-3">
            <div>
                <div className="flex items-center mb-6 gap-2">
                    <img src={comment.user.avatar ? comment.user.avatar : '/images/avatar.jpg'} alt="Avatar" className="w-12 h-12 rounded-full" />
                    <div>
                        <Link href={`/author/${comment.user.id}`} className="text-lg font-medium text-gray-800 hover:text-blue-400">{comment.user.name}</Link>
                        <div className="text-gray-500">{getShamsiDate(comment.created_at)}</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">{comment.body}</p>
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <button onClick={() => setShowReplyForm(!showReplyForm)} className="border px-2 py-1 rounded-md cursor-pointer text-xs hover:border-blue-400">پاسخ</button>
                    </div>
                </div>
                {
                    showReplyForm ? (
                        <div>
                            <form action="">
                                <textarea className="w-full rounded-md p-2" rows="5" defaultValue={"پاسخ خود را وارد کنید..."}></textarea>
                                <button className="border px-2 py-1 rounded-md cursor-pointer text-xs hover:border-blue-400">ارسال</button>
                            </form>
                        </div>
                    ) : null
                }

            </div>
            <div>
                {nestedComments}
            </div>
        </div>
    )
}