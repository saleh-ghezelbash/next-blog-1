"use client";

import React from "react";
import {
  Navbar as StickyNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <li
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          درباره ما
        </a>
      </li>
      <li
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          تماس با ما
        </a>
      </li>
      <li
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          دسته بندی
        </a>
      </li>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10">
      <StickyNavbar className="h-max max-w-[1200px] mx-auto border-none rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-1">
              <button className="hidden lg:inline-block border rounded-lg px-2 py-1 text-sm hover:border-blue-400 hover:shadow-md"><span>ورود / ثبت نام</span></button>
            </div>
            <div className="w-72">
              <Input
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }} icon={<FaMagnifyingGlass />} />
            </div>
            <div className="flex gap-3 items-center">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="font-bold text-2xl">بلاگ</div>
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
          {navList}
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