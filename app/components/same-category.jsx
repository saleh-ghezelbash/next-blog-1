"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function SameCategory({ items }) {
  return (
    <div className="max-w-[1200px] mx-auto my-6">
      <h1 className="font-bold text-lg text-right mb-4 pb-4 border-b">
        مطالب مشابه
      </h1>
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
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[200px] bg-blue-gray-100 rounded-xl">Slide 1</div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 2</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 3</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 4</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 5</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 6</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 7</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 8</div></SwiperSlide>
                <SwiperSlide ><div className='h-[200px] bg-blue-gray-100 rounded-xl'>Slide 9</div></SwiperSlide> */}
      </Swiper>
    </div>
  );
}
