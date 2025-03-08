"use client";

import { getRandomPosts } from '@/_lib/data-service';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function EditorSwiper() {
    const [posts, setPosts] = useState([])
    
        useEffect(() => {
            const handleFetch = async () => {
                try {
                    const data = await getRandomPosts();
                    setPosts(data);
                } catch (error) {
                    console.log(error);
                }
            };
            handleFetch();
        }, []);

    return (
        <div className='max-w-[1200px] mx-auto mt-6'>
            <h1 className="font-bold text-lg text-right mb-4 pb-4 border-b">انتخاب سردبیر</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
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
            >
                {posts.map(post => <SwiperSlide key={post.id} ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>{post.title}</div></SwiperSlide>)}
            </Swiper>
        </div>
    )
}