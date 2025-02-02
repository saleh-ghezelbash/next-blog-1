"use client"

import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function Like(){
    let [isLiked, setIsLiked] = useState(false)
    return (
        <div className="flex gap-2 items-center my-16 justify-center border-t p-4">
          <span>آیا این مطلب برای شما مفید بود؟</span>
          <div className="cursor-pointer">
            {isLiked ? <FaHeart size={24} color="red" onClick={() => setIsLiked(!isLiked)} /> : <FaRegHeart size={24} color="red" onClick={() => setIsLiked(!isLiked)} />}
          </div>
        </div>
    )
}