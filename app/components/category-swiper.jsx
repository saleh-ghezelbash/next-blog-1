"use client";

import { getMostCommentsPosts } from '@/_lib/data-service';
import { useEffect, useState } from 'react';
// import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MostComments() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const data = await getMostCommentsPosts();
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        };
        handleFetch();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto mt-6'>
            <h1 className="font-bold text-lg text-right mb-4 pb-4 border-b">پر بحث ترین ها</h1>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
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
                {/* <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 1</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 2</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 3</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 4</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 5</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 6</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 7</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 8</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 9</div></SwiperSlide> */}
            </Swiper>
        </div>
    )
}