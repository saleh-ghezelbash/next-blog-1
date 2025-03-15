"use client";

import { getMostLikedPosts } from '@/_lib/data-service';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegHeart, FaRegCommentDots } from "react-icons/fa6";

export default function Popular() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const data = await getMostLikedPosts();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        };
        handleFetch();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto mt-6'>
            <h1 className="font-bold text-lg text-right mb-4 pb-4 border-b">محبوب ترین ها</h1>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[]}
                className="mySwiper"
                dir="rtl"
            >
                {/* {posts.map(post => <SwiperSlide key={post.id} ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>{post.title}</div></SwiperSlide>)} */}
                {posts.map(post => <SwiperSlide key={post.id} >
                    <article class="relative isolate flex flex-col justify-end gap-4 overflow-hidden rounded-2xl px-4 pb-2 pt-40 max-w-sm mx-auto">
                        <img src={post.image ? post.image : '/images/blog.png'} class="absolute h-full w-full object-cover inset-0"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 class="z-10 mt-3 text-xl text-right font-bold text-white">{post.title}</h3>
                        <div className="z-10 flex justify-end">
                            <div className="flex gap-2 items-center">
                                <span>{post._count.like}</span>
                                <FaRegHeart size={20} />
                            </div>
                            {/* <div className="flex gap-2 items-center">
                                <span>{post._count.comment}</span>
                                <FaRegCommentDots size={20} />
                            </div> */}
                        </div>
                    </article>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}