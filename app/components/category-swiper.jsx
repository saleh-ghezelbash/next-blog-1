"use client";

// import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function CategorySwiper() {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper my-4 bg-red-50 p-4"
            >
                <SwiperSlide className='p-4 bg-green-50'><div className='h-[200px]'>Slide 1</div></SwiperSlide>
                <SwiperSlide className='p-4'><div className='h-[200px]'>Slide 2</div></SwiperSlide>
                <SwiperSlide className='p-4 bg-green-50'><div className='h-[200px]'>Slide 3</div></SwiperSlide>
                <SwiperSlide className='p-4'><div className='h-[200px]'>Slide 4</div></SwiperSlide>
                <SwiperSlide className='p-4 bg-green-50'><div className='h-[200px]'>Slide 5</div></SwiperSlide>
                <SwiperSlide className='p-4'><div className='h-[200px]'>Slide 6</div></SwiperSlide>
                <SwiperSlide className='p-4 bg-green-50'><div className='h-[200px]'>Slide 7</div></SwiperSlide>
                <SwiperSlide className='p-4'><div className='h-[200px]'>Slide 8</div></SwiperSlide>
                <SwiperSlide className='p-4 bg-green-50'><div className='h-[200px]'>Slide 9</div></SwiperSlide>
            </Swiper>
        </div>
    )
}