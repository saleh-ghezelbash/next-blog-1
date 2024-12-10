"use client";
import CategoryGallery from "./components/category-gallery.jsx";
import CategorySwiper from "./components/category-swiper";
import { MainSlider } from "./components/main-slider";
import BlogList from "./components/blog-list.jsx";
import TrendList from "./components/trend-list.jsx";

export default function Home() {
  return (
    <div className="min-h-screen p-4 pb-16 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <MainSlider />
      <CategoryGallery />
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row w-full gap-6 mt-6">
        <div className="w-full lg:w-1/3">
          <TrendList />
        </div>
        <div className="w-full lg:w-2/3">
          <BlogList />
        </div>
      </div>
      <CategorySwiper />
    </div>
  );
}