"use client"

import Blog from "../../components/blog-summary";
import EditorSwiper from "../../components/editor-swiper.jsx";

export default async function Author({params}) {
    const id = (await params).id
    
    return (
        <div className="max-w-[1200px] mx-auto">
            <div style={{ direction: "rtl" }} className="bg-blue-600 px-4 lg:px-16 shadow-lg">
                <div className="flex justify-center items-center h-72">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                            <img loading="lazy" src="https://blog.faradars.org/wp-content/uploads/2024/02/image.jpg" width="96" height="96" alt="ویدا حامدیان کیش" />
                        </div>
                    </div>
                    <div className="pr-6">
                        <div className="text-white text-lg md:text-xl font-extrabold mb-3">ویدا حامدیان کیش</div>
                        <div className="text-sm md:text-base text-white font-extralight">ویدا حامدیان کیش دانش‌آموخته کارشناسی زبان و ادبیات فارسی است. هنر و ادبیات از علاقه‌مندی‌های او هستند. فعالیت‌های کاری او در زمینه تولید محتوا و ویرایش بوده و در حال حاضر نیز نگارش آموزش‌های حوزه ادبیات فارسی، دستور زبان فارسی و صرف و نحو عربی مجله فرادرس را به عهده دارد.</div>
                    </div>
                </div>
            </div>
            <div className="mt-6 p-4">
                <p className="text-right">:مقاله های منتشر شده توسط این نویسنده</p>
            </div>
            <div>
                <div className="my-2 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>

                <div className="my-2 flex items-center justify-center">
                    <button className="py-1 px-2 border rounded-md hover:border-blue-400 hover:shadow-md">نمایش بیشتر</button>
                </div>
            </div>
            <div className="mb-6">
                <EditorSwiper />
            </div>
        </div>
    )
}