"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";

export default function BlogSummary() {
    let [isLiked, setIsLiked] = useState(false)
    return (

        <article className="p-3 mb-5 border border-slate-300 rounded-lg">
            <div className="flex flex-row justify-between gap-2 mb-5">
                <a className="w-2/6 rounded-lg bg-slate-200 overflow-hidden" href="/participe-passe-%d8%af%d8%b1-%d9%81%d8%b1%d8%a7%d9%86%d8%b3%d9%87/">
                    <img loading="lazy" src="https://blog.faradars.org/wp-content/uploads/2024/11/Un-tableau-noir-au-mur-un-vase-et-une-lampe-de-lecture-Le-Passe-Participe-est-ecrit-au-tableau-1-768x432.jpg.webp" width="640" height="360" alt="Participe Passe در فرانسه – به زبان ساده با مثال و تمرین" className="object-cover object-center h-24 md:h-40 w-full" />
                </a>
                <div className="w-4/6 overflow-hidden flex flex-col justify-between self-stretch text-right">
                    <div>
                        <div className="mb-3">
                            <span className="px-4 py-1 bg-gray-300 rounded-sm text-xs hover:text-red-400"><a href="/category/french-language/">زبان فرانسه</a></span>
                        </div>
                        <h2 className="text-slate-900 font-extrabold text-lg md:text-xl">
                            <a rel="bookmark" href="/participe-passe-%d8%af%d8%b1-%d9%81%d8%b1%d8%a7%d9%86%d8%b3%d9%87/">Participe Passe در فرانسه – به زبان ساده با مثال و تمرین</a></h2>
                        <a className="hidden md:block text-sm text-slate-500 font-extralight mt-2" href="/participe-passe-%d8%af%d8%b1-%d9%81%d8%b1%d8%a7%d9%86%d8%b3%d9%87/">در این مطلب از «مجله فرادرس» participe passe در فرانسه را که برای بسیاری از صرف فعل‌ها به ما کمک می‌کند، به همراه مثال و تمرین یاد می‌گیریم.</a>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center justify-between gap-6">
                    <div className="flex gap-2 items-center">
                        <span>0</span>
                        {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                    </div>
                    <div className="flex gap-2 items-center">
                        <span>0</span>
                        <FaRegCommentDots size={20} />
                    </div>
                </div>
                <div className="flex gap-3 text-sm">
                    <span>1393/10/03</span>
                    <span>صالح قزلباش</span>
                </div>
            </div>
        </article>

    )
}