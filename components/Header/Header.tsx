import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Header = ({ isScrolling }: { isScrolling: Boolean }) => {
  const router = useRouter();

  return (
    <header
      className={`py-5 md:py-6 bg-black section-padding-x px-0 ${
        isScrolling ? "fixed" : "static"
      } top-0 left-0 right-0 z-10`}
    >
      <div className="container m-auto content-center grid grid-cols-2 max-w-screen-hd">
        <div className="content-center flex">
          <Link href="/">
            <a className="no-underline">
              <h1 className="sf-heavy capitalize text-xl md:text-2xl xl:text-3.5xl text-white my-auto">
                achuta anekal
              </h1>
            </a>
          </Link>
        </div>
        <div className="flex">
          <nav className="ml-auto my-auto">
            <ul className="flex ml-auto">
              <li className="mr-5 xl:mr-10">
                <Link href="/">
                  <a
                    className={`text-sm md:text-xl xl:text-2xl sf-medium capitalize ${
                      router.pathname === "/" ? "text-white" : "text-gray-400"
                    }`}
                  >
                    work
                  </a>
                </Link>
              </li>
              <li className="mr-5 xl:mr-10">
                <Link href="/about">
                  <a
                    className={`text-sm md:text-xl xl:text-2xl sf-medium capitalize ${
                      router.pathname === "/about"
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    about
                  </a>
                </Link>
              </li>
              <li className="mr-0">
                <Link href="/">
                  <a
                    className={`text-sm md:text-xl xl:text-2xl sf-medium capitalize ${
                      router.pathname === "/resume"
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    resume
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
