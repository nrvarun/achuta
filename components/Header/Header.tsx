import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 bg-black">
      <div className="container flex flex-row m-auto content-center px-3 md:px-5 xl:px-0">
        <div className="w-1/2 content-center flex">
          <h1 className="sf-heavy capitalize text-xl md:text-2xl xl:text-3.5xl text-white my-auto">
            achut anekal
          </h1>
        </div>
        <div className="w-1/2 flex">
          <nav className="ml-auto my-auto">
            <ul className="flex ml-auto">
              <li className="mr-5 xl:mr-10">
                <Link href="/">
                  <a className="text-sm md:text-xl xl:text-2xl text-white sf-medium capitalize">
                    work
                  </a>
                </Link>
              </li>
              <li className="mr-5 xl:mr-10">
                <Link href="/">
                  <a className="text-sm md:text-xl xl:text-2xl text-white sf-medium capitalize">
                    about
                  </a>
                </Link>
              </li>
              <li className="mr-0">
                <Link href="/">
                  <a className="text-sm md:text-xl xl:text-2xl text-white sf-medium capitalize">
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
