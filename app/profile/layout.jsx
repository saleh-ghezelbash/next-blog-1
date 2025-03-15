// "use client"

import Link from "next/link";
import { BsFileEarmarkPerson, BsBookmarkHeart, BsPersonLock, BsFillFileEarmarkRichtextFill  } from "react-icons/bs";
// import { useRouter } from "next/router";

// export const metadata = {
//     title: "Profile",
//     description: "User Profile",
// };

export default function ProfileLayout({ children }) {
    //const router = useRouter()

    return (
        <div className="max-w-[1200px] mx-auto">
            <div
                style={{ direction: "rtl" }}
                className="bg-blue-600 px-4 lg:px-16 shadow-lg h-40 flex items-center justify-center"
            >
                <p className="text-center font-bold text-lg">حساب کاربری</p>
            </div>

            <div className="flex gap-4 my-4">
                <div className="w-1/4 order-1 border rounded p-4" style={{ direction: "rtl" }}>
                    <ul>
                        <li className="py-4 border-b mb-2">
                            <div className="flex flex-col gap-4 items-center">
                                <div className="overflow-hidden rounded-full w-24 h-24">
                                    <img src="/images/avatar.jpg" alt="avatar" />
                                </div>
                                <p>نام کاربر</p>
                            </div>
                        </li>


                        <li className="py-1">
                            <Link href={"/profile/account"} className="rounded p-2 hover:bg-blue-gray-300 flex gap-2 items-center">
                              <BsFileEarmarkPerson size={24}/> مشخصات
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href={"/profile/blogs"} className="rounded p-2 hover:bg-blue-gray-300 flex gap-2 items-center">
                               <BsFillFileEarmarkRichtextFill size={24} /> پست ها
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href={"/profile/likes"} className="rounded p-2 hover:bg-blue-gray-300 flex gap-2 items-center">
                               <BsBookmarkHeart size={24}/> علاقمندی ها
                            </Link>
                        </li>
                        <li className="py-1">
                            <Link href={"/profile/auth"} className="rounded p-2 hover:bg-blue-gray-300 flex gap-2 items-center">
                              <BsPersonLock size={24}/> رمز عبور
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="w-3/4 border rounded p-2">{children}</div>
            </div>
        </div>
    );
}