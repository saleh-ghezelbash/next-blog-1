"use client";

import { useEffect, useState, useRef } from "react";
import {
  Navbar as StickyNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  Avatar,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsMoon, BsSun } from "react-icons/bs";
import Link from "next/link";

const categoryItems = [
  {
    label: "تکنولوژی",
    href: "tech",
  },
  {
    label: "اقتصاد",
    href: "econ",
  },
  {
    label: "هنر",
    href: "art",
  },
  {
    label: "ورزش",
    href: "sport",
  }
];

// const fetchAllCategories = async () => {
//   try {
//     const res = await fetch("/api/category");
//     const data = await res.json();
//     console.log("Categories: ", data);

//     return data?.categories;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const dropdown = useRef(null);
  const trigger = useRef(null);

  // const categories = await fetchAllCategories();

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategories()
  }, [])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !isMenuOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setIsMenuOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!isMenuOpen || keyCode !== 27) return;
      setIsMenuOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="sticky top-0 z-10">
      <StickyNavbar className="h-max max-w-[1200px] mx-auto border-none rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">

          <div className="flex items-center justify-between w-full">
            <div className="flex justify-between items-center gap-5">
              <button className="hidden lg:inline-block border rounded-md px-2 py-1 text-sm hover:border-blue-400 hover:shadow-md"><span>ورود / ثبت نام</span></button>
              <div>
                {
                  isDark ? <BsMoon onClick={() => setIsDark(!isDark)} size={20} /> : <BsSun onClick={() => setIsDark(!isDark)} size={20} />
                }
              </div>
            </div>
            <div className="w-72">
              <Input
                className="!border !border-gray-300 bg-white text-gray-900 shadow-sm shadow-gray-900/5 placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-400 focus:!border-t-blue-400 focus:shadow-md"
                labelProps={{
                  className: "hidden",
                }} icon={<FaMagnifyingGlass />} />
            </div>
            <div className="flex gap-4 items-center">

              <div className="mr-4 hidden lg:block">
                <span>تماس با ما</span>
              </div>
              <div className="relative">
                <button
                  ref={trigger}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex justify-center items-center w-full"
                >
                  <span>دسته بندی</span>
                  <svg
                    className="h-3 w-3 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  ref={dropdown}
                  className={`absolute right-0 mt-2 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none ${isMenuOpen === true ? "block" : "hidden"}`}
                  role="menu"
                >
                  <div className="py-1 text-right" role="none">
                    {categories.length > 0 ? categories.map((item) => {
                      return (
                        <Link
                          key={item._id}
                          href={`/search?cat=${item.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                          role="menuitem"
                        >
                          {item.title}
                        </Link>
                      )
                    }): <p className="p-2">یافت نشد</p>}
                  </div>
                </div>
              </div>

              <div className="font-bold text-2xl"><Link href={"/"}>بلاگ</Link></div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {/* {navList} */}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </StickyNavbar>
    </div>
  );
}