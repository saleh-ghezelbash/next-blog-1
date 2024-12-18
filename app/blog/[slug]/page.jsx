import Link from "next/link";
import { FaInbox } from "react-icons/fa";

export default async function Blog({ params }) {
    const slug = (await params).slug

    return (
        <div className="max-w-[1200px] mx-auto">
            <div style={{direction: "rtl"}} className="px-2">
                <div className="my-8 flex items-center gap-2">
                    <FaInbox size={24} color="gray"/>
                    <span className="font-bold text-lg text-blue-700 hover:text-black">
                        <Link href={"/search?type=cat&cat=tech"}>تکنولوژی</Link>
                    </span>
                </div>
                <div className="text-5xl font-bold my-4">
                    عنوان
                </div>
                <div className="my-2">
                    <span>آخرین به‌روزرسانی: ۲۷ آذر ۱۴۰۳</span>
                </div>
                <div className="relative h-fit w-full overflow-hidden rounded-lg">
                    <img
                        alt="آرایه مجاز چیست؟ – به زبان ساده با مثال و تمرین"
                        className="w-full rounded-lg transition-opacity duration-300 opacity-100"
                        src="https://blog.faradars.org/wp-content/uploads/2022/02/metonymy-in-persian-cover.jpg.webp"
                        width="1280"
                        height="720"
                    />
                </div>
                <div>
                    مشروح
                </div>
                <div className="post-tags my-10 print:hidden">
                    <div className="text-slate-500 font-extrabold border-b border-slate-200 py-2 mb-2">برچسب‌ها</div>
                    <div className="collapsible-tags">
                        <div className="collapsible-tags-content overflow-hidden relative max-h-[31px]">
                            <div className="collapsible-tags-content-inner">
                                <div className="rounded-md px-2 py-1 text-sm border hover:border-blue-400 hover:shadow-md inline-block cursor-pointer mx-2">
                                    <a href="/tag/%d9%81%d8%a7%d8%b1%d8%b3%db%8c-%d8%af%d9%87%d9%85/">فارسی دهم</a>
                                </div>
                                <div className="rounded-md px-2 py-1 text-sm border hover:border-blue-400 hover:shadow-md inline-block cursor-pointer mx-2">
                                    <a href="/tag/%d8%a2%d8%b1%d8%a7%db%8c%d9%87-%d8%a7%d8%af%d8%a8%db%8c/">آرایه ادبی</a>
                                </div>
                                <div className="rounded-md px-2 py-1 text-sm border hover:border-blue-400 hover:shadow-md inline-block cursor-pointer mx-2">
                                    <a href="/tag/%d9%81%d8%a7%d8%b1%d8%b3%db%8c-%d9%87%d8%b4%d8%aa%d9%85/">فارسی هشتم</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}