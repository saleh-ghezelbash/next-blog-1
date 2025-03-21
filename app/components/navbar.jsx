"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  Navbar as StickyNavbar,
  IconButton,
} from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { getCategories } from "@/_lib/data-service";
import ThemeToggle from "./theme-toggle";
import Accordion from "./basic/accordion";
import AccordionList from "./basic/accordion-list";

export default function Navbar() {
  const router = useRouter()
  const [openNav, setOpenNav] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const [isCategoryAccordionOpen, setIsCategoryAccordionOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [focused, setFocused] = useState(false);

  const searchDivRef = useRef(null);
  const dropdown = useRef(null);
  const dropdownProfileMenu = useRef(null);
  const trigger = useRef(null);
  const triggerProfileMenu = useRef(null);

  useEffect(() => {
    if (focused) {
      searchDivRef.current.classList.add('!border-blue-400');
      searchDivRef.current.classList.add('!border-t-blue-400');
      searchDivRef.current.classList.add('shadow-md');
    } else {
      searchDivRef.current.classList.remove('!border-blue-400');
      searchDivRef.current.classList.remove('!border-t-blue-400');
      searchDivRef.current.classList.remove('shadow-md');
    }
  }, [focused])

  const closeMenu = () => setIsMenuOpen(false);



  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategories();
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownProfileMenu.current) return;
      if (
        !isProfileMenuOpen ||
        dropdownProfileMenu.current.contains(target) ||
        triggerProfileMenu.current.contains(target)
      )
        return;
      setIsProfileMenuOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

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

  const handleSearch = () => {
    router.push(`/search?s=${searchValue}`)
  }

  const handleKeyDown = function (e) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const AccordionHeader = <div>
    <div className="flex items-center gap-3 text-black">
      {isLogedIn ? <div className="relative">
        <button
          ref={triggerProfileMenu}
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          className="inline-flex justify-center items-center w-full"
        >
          <span>صالح</span>
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
          ref={dropdownProfileMenu}
          className={`absolute left-0 mt-2 w-32 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none ${isProfileMenuOpen === true ? "block" : "hidden"
            }`}
          role="menu"
        >
          <div className="py-1 text-right" role="none">
            <Link
              href={`/profile`}
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsLogedIn(false)}
            >
              پروفایل
            </Link>
            <Link
              href={`/logout`}
              className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsLogedIn(false)}
            >
              خروج
            </Link>
          </div>
        </div>
      </div> : <button className="inline-block border rounded-md px-2 py-1 text-sm hover:border-blue-400 hover:shadow-md">
        <span>ورود / ثبت نام</span>
      </button>}

      <ThemeToggle />
      <div className="font-bold text-2xl ml-auto">
        <Link href={"/"}>بلاگ</Link>
      </div>
    </div>
  </div>

  return (
    <div className="sticky top-0 z-10">
      <StickyNavbar className="hidden lg:block h-max max-w-[1200px] mx-auto border-none rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center justify-between w-full">
            <div className="flex justify-between items-center gap-5">
              <div>
                {isLogedIn ? <div className="relative">
                  <button
                    ref={triggerProfileMenu}
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="inline-flex justify-center items-center w-full hover:outline outline-1 outline-blue-400 rounded-xl px-1"
                  >
                    <span>صالح</span>
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
                    ref={dropdownProfileMenu}
                    className={`absolute left-0 mt-2 w-32 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none ${isProfileMenuOpen === true ? "block" : "hidden"
                      }`}
                    role="menu"
                  >
                    <div className="py-1 text-right" role="none">
                      <Link
                        href={`/profile`}
                        className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsLogedIn(false)}
                      >
                        پروفایل
                      </Link>
                      <Link
                        href={`/logout`}
                        className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => setIsLogedIn(false)}
                      >
                        خروج
                      </Link>
                    </div>
                  </div>
                </div> : <button className="hidden lg:inline-block border rounded-md px-2 py-1 text-sm hover:border-blue-400 hover:shadow-md">
                  <span>ورود / ثبت نام</span>
                </button>}
              </div>

              <ThemeToggle />
            </div>
            <div className="w-72">
              <div ref={searchDivRef} className="flex gap-2 items-center px-2 overflow-hidden !border bg-white text-gray-900 shadow-sm shadow-gray-900/5 placeholder:opacity-100 !rounded-3xl">
                <input
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  type="text"
                  className="py-2 focus:outline-none w-full bg-white text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <FaMagnifyingGlass onClick={handleSearch} className="cursor-pointer text-gray-500" size={24} />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="mr-4 hidden lg:block">
                <Link href={"/contact"}>تماس با ما</Link>
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
                    focus:outline-none ${isMenuOpen === true ? "block" : "hidden"
                    }`}
                  role="menu"
                >
                  <div className="py-1 text-right" role="none">
                    {categories.length > 0 ? (
                      categories.map((item) => {
                        return (
                          <Link
                            key={item.id}
                            href={`/search?catid=${item.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name_fa}
                          </Link>
                        );
                      })
                    ) : (
                      <p className="p-2" dir="rtl">
                        در حال بازیابی...
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="font-bold text-2xl">
                <Link href={"/"}>بلاگ</Link>
              </div>
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
      </StickyNavbar>

      <Accordion
        title={AccordionHeader}
        isOpen={isOpenAccordion}
        toggleAccordion={() => setIsOpenAccordion(!isOpenAccordion)}
      >
        <ul>

          <li className="my-2 text-right text-black">
            <Link href={"/contact"}>تماس با ما</Link>
          </li>
          <li className="my-2">
            <AccordionList
              title={<span className="text-black">دسته بندی</span>}
              isOpen={isCategoryAccordionOpen}
              toggleAccordion={() => setIsCategoryAccordionOpen(!isCategoryAccordionOpen)}
            >
              {categories.length > 0 ? (
                categories.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={`/search?catid=${item.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 
                            hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span dir="rtl">
                        {item.name_fa}
                      </span>
                    </Link>
                  );
                })
              ) : (
                <p className="p-2" dir="rtl">
                  در حال بازیابی...
                </p>
              )}
            </AccordionList>
          </li>
          <li className="my-4">
            <div ref={searchDivRef} className="flex gap-2 items-center px-2 overflow-hidden !border bg-white text-gray-900 shadow-sm shadow-gray-900/5 placeholder:opacity-100 !rounded-3xl">
              <input
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                type="text"
                className="py-2 text-right focus:outline-none w-full bg-white text-gray-900 placeholder:text-gray-500 placeholder:opacity-100"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <FaMagnifyingGlass onClick={handleSearch} className="cursor-pointer text-gray-500" size={24} />
            </div>
          </li>
        </ul>
      </Accordion>
    </div>
  );
}
