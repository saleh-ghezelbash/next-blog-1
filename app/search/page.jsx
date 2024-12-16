import Blog from "../components/blog-summary";
import EditorSwiper from "../components/editor-swiper.jsx";

export default function Search() {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div>

                <div className="mb-4 mt-8 p-2 border-b text-right" style={{ direction: "rtl" }}>
                    <p>جستجو درباره: <span>{ }</span></p>
                    <p>برچسب: <span>{ }</span></p>
                    <p>دسته بندی: <span>{ }</span></p>
                </div>

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