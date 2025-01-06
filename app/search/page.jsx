import Blog from "../components/blog-summary";
import EditorSwiper from "../components/editor-swiper.jsx";

const getPostsByCategorySlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_URL}/api/category/${slug}`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log("error fetching category: ", error);
    }
}

const getPostByTagSlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_URL}/api/tag/${slug}`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log("error fetching tag: ", error);
    }
}

const getPostBySearchValue = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_URL}/api/post/${slug}`);
        const data = await res.json();
        return data
    } catch (error) {
        console.log("error fetching posts: ", error);
    }
}

export default async function Search({ searchParams }) {
    console.log("searchParams: ", searchParams);
    const searchVal = ""
    let data = null
    if (searchParams.cat) {
        const searchVal = searchParams.cat
        data = await getPostsByCategorySlug(searchParams.cat)
        console.log("data::", data);
        
    } else if (searchParams.tag) {
        const searchVal = searchParams.tag
        getPostByTagSlug(searchParams.tag)
    } else if (searchParams.s) {
        const searchVal = searchParams.s
        getPostBySearchValue(searchParams.s)
    } else {
    }


    return (
        <div className="max-w-[1200px] mx-auto">
            <div>

                <div className="mb-4 mt-8 p-2 border-b text-right" style={{ direction: "rtl" }}>
                    <p>جستجو درباره: <span>{ searchVal }</span></p>
                    <p>برچسب: <span>{ searchVal }</span></p>
                    {/* <p>دسته بندی: <span>{ searchVal }</span></p> */}
                    <p>دسته بندی: <span>{ data.title }</span></p>
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