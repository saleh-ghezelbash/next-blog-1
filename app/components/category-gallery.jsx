"use client";

export default function CategoryGallery(params) {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="featured-posts grid md:grid-cols-2 gap-2 mt-8">
                <div>
                    <a className="bg-slate-300 h-60 md:h-[32rem] rounded-lg bg-cover bg-center bg-no-repeat block relative overflow-hidden group" style={{ backgroundImage: "url(https://blog.faradars.org/wp-content/uploads/2021/08/orange-and-green-icons-in-dark-background-768x451.png.webp)" }} href="/%d9%85%d8%af%d8%a7%d8%b1-%d9%85%d9%86%d8%b7%d9%82%db%8c-%da%86%db%8c%d8%b3%d8%aa/">
                        <div className="block absolute transition-opacity opacity-70 group-hover:opacity-80 w-full h-full bg-gradient-to-t from-slate-900 to-transparent">
                        </div>
                        <div className="block absolute inset-x-0 bottom-6 p-4 md:p-6 font-black text-white text-lg md:text-2xl">مدار منطقی چیست؟ – آموزش به زبان ساده</div>
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-2"><a className="bg-slate-300 h-60 md:h-[15.75rem] col-span-2 rounded-lg bg-cover bg-center bg-no-repeat relative overflow-hidden group" style={{ backgroundImage: "url(https://blog.faradars.org/wp-content/uploads/2024/11/persian-poetry-metre-chart-in-persian-cover-768x432.jpg.webp)" }} href="/%d8%ac%d8%af%d9%88%d9%84-%d8%a7%d9%88%d8%b2%d8%a7%d9%86-%d8%b4%d8%b9%d8%b1-%d9%81%d8%a7%d8%b1%d8%b3%db%8c/">
                    <div className="block absolute transition-opacity opacity-70 group-hover:opacity-80 w-full h-full bg-gradient-to-t from-slate-900 to-transparent">
                    </div>
                    <div className="block absolute inset-x-0 bottom-6 p-4 md:p-6 font-black text-white text-lg md:text-xl">جدول اوزان شعر فارسی با مثال و توضیح</div>
                </a>
                    <a className="bg-slate-300 h-60 md:h-[15.75rem] col-span-2 sm:col-span-1 rounded-lg bg-cover bg-center bg-no-repeat relative overflow-hidden group" style={{ backgroundImage: "url(https://blog.faradars.org/wp-content/uploads/2024/12/pyramid-showing-adverbs-of-frequency-768x432.jpg.webp)" }} href="/%da%af%d8%b1%d8%a7%d9%85%d8%b1-adverb-of-frequency/">
                        <div className="block absolute transition-opacity opacity-70 group-hover:opacity-80 w-full h-full bg-gradient-to-t from-slate-900 to-transparent">
                        </div>
                        <div className="block absolute inset-x-0 bottom-6 p-4 font-black text-white text-lg md:text-base">گرامر Adverb of Frequency – به زبان ساده با مثال و تمرین</div>
                    </a>
                    <a className="bg-slate-300 h-60 md:h-[15.75rem] col-span-2 sm:col-span-1 rounded-lg bg-cover bg-center bg-no-repeat relative overflow-hidden group" style={{ backgroundImage: "url(https://blog.faradars.org/wp-content/uploads/2024/11/a-modern-illustration-of-the-if-in-sql-statement-768x430.jpg.webp)" }} href="/%d8%af%d8%b3%d8%aa%d9%88%d8%b1-if-%d8%af%d8%b1-sql/">
                        <div className="block absolute transition-opacity opacity-70 group-hover:opacity-80 w-full h-full bg-gradient-to-t from-slate-900 to-transparent">
                        </div>
                        <div className="block absolute inset-x-0 bottom-6 p-4 font-black text-white text-lg md:text-base">دستور IF در SQL – توضیح به زبان ساده با مثال و کد</div>
                    </a>
                </div>
            </div>
        </div>
    )
}