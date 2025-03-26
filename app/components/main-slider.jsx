"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useCallback, useRef } from "react";

export function MainSlider() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mb-12">
      <Swiper
        ref={sliderRef}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "992px" }}>
          <div className="relative rounded-xl font-work mb-24">
            <img alt="post-thumb" loading="lazy" width="1216" height="600" decoding="async" data-nimg="1" className="rounded-xl" src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" style={{ color: "transparent" }} />
            <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20 bg-white text-black dark:bg-blue-gray-900 dark:text-white">
              <a href="/category/right-sidebar">
                <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4"> Travel</div>
              </a>
              <h3>
                <a className="text-base-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500" href="/single-post">The Ultimate Guide to Planning a Trip Abroad</a>
              </h3>
              <div className="mt-6 flex items-center gap-5 text-gray-600">
                <div className=" flex items-center gap-3">
                  <h6>
                    <a className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300" href="/author">metablog</a>
                  </h6>
                </div>
                <p className="text-xs md:text-base">Dec 27, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "992px" }}>
          <div className="relative rounded-xl font-work mb-24">
            <img alt="post-thumb" loading="lazy" width="1216" height="600" decoding="async" data-nimg="1" className="rounded-xl" src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" style={{ color: "transparent" }} />
            <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20 bg-white text-black dark:bg-blue-gray-900 dark:text-white">
              <a href="/category/right-sidebar">
                <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4"> Travel</div>
              </a>
              <h3>
                <a className="text-base-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500" href="/single-post">The Ultimate Guide to Planning a Trip Abroad</a>
              </h3>
              <div className="mt-6 flex items-center gap-5 text-gray-600">
                <div className=" flex items-center gap-3">
                  <h6>
                    <a className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300" href="/author">metablog</a>
                  </h6>
                </div>
                <p className="text-xs md:text-base">Dec 27, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ width: "992px" }}>
          <div className="relative rounded-xl font-work mb-24">
            <img alt="post-thumb" loading="lazy" width="1216" height="600" decoding="async" data-nimg="1" className="rounded-xl" src="https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I" style={{ color: "transparent" }} />
            <div className="absolute -bottom-16 left-4 md:left-14 rounded-xl p-4 md:p-10 bg-base-100 w-10/12 md:w-7/12 lg:w-6/12 shadow-[0_12px_24px_-6px] shadow-base-content/20 bg-white text-black dark:bg-blue-gray-900 dark:text-white">
              <a href="/category/right-sidebar">
                <div className="w-fit text-primary-content px-2.5 py-1 bg-primary text-xs md:text-sm rounded-md mb-4"> Travel</div>
              </a>
              <h3>
                <a className="text-base-content line-clam-3 font-semibold text-xl md:text-2xl lg:text-4xl leading-5 md:leading-10 hover:text-primary transition-all hover:duration-500" href="/single-post">The Ultimate Guide to Planning a Trip Abroad</a>
              </h3>
              <div className="mt-6 flex items-center gap-5 text-gray-600">
                <div className=" flex items-center gap-3">
                  <h6>
                    <a className="text-xs md:text-base font-medium hover:text-primary transition hover:duration-300" href="/author">metablog</a>
                  </h6>
                </div>
                <p className="text-xs md:text-base">Dec 27, 2022</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="grid sm:flex items-center gap-1 md:gap-4 absolute right-2 sm:right-0 bottom-8 z-40">
          <button onClick={handleNext} className="w-7 md:w-10 h-7 md:h-10 border border-secondary rounded-md flex items-center justify-center hover:border-primary hover:bg-primary group transition duration-300 ease-in-out">
            <svg className="text-secondary group-hover:text-white w-3 h-3 md:w-auto md:h-auto" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47541 0.712087C7.84153 1.0782 7.84153 1.6718 7.47541 2.03791L2.51333 7L7.47541 11.9621C7.84153 12.3282 7.84153 12.9218 7.47541 13.2879C7.1093 13.654 6.5157 13.654 6.14959 13.2879L0.524587 7.66291C0.158471 7.2968 0.158471 6.7032 0.524587 6.33709L6.14959 0.712087C6.5157 0.345971 7.1093 0.345971 7.47541 0.712087Z" fill="currentColor"></path>
            </svg>
          </button>
          <button onClick={handlePrev} className="w-7 md:w-10 h-7 md:h-10 border border-secondary rounded-md flex items-center justify-center hover:border-primary hover:bg-primary group transition duration-300 ease-in-out">
            <svg className="text-secondary group-hover:text-white w-3 h-3 md:w-auto md:h-auto" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.524587 0.712087C0.890704 0.345971 1.4843 0.345971 1.85041 0.712087L7.47541 6.33709C7.84153 6.7032 7.84153 7.2968 7.47541 7.66291L1.85041 13.2879C1.4843 13.654 0.890704 13.654 0.524587 13.2879C0.158471 12.9218 0.158471 12.3282 0.524587 11.9621L5.48667 7L0.524587 2.03791C0.158471 1.6718 0.158471 1.0782 0.524587 0.712087Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
}