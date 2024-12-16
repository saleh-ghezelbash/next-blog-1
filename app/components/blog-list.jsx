import Blog from "./blog-summary.jsx";
export default function BlogList() {
    return (
        <div>

        <div>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        </div>
        <div className="my-2 flex items-center justify-center">
            <button className="py-1 px-2 border rounded-lg hover:border-blue-400">نمایش بیشتر</button>
        </div>
        </div>
    )
}