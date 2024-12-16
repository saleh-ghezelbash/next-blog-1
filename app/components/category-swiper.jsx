"use client";

// import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function CategorySwiper() {
    return (
        <div className='max-w-[1200px] mx-auto mt-6'>
            <h1 className="font-bold text-lg text-right mb-4 pb-4 border-b">دسته بندی ها</h1>
            <Swiper
                slidesPerView={5}
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
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 1</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 2</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 3</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 4</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 5</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 6</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 7</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 8</div></SwiperSlide>
                <SwiperSlide ><div className='h-[100px] bg-blue-gray-100 rounded-full'>Slide 9</div></SwiperSlide>
            </Swiper>
        </div>
    )
}