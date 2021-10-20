import React from "react";

const Footer = ({ children }: any) => {
  return (
    <footer className="bg-black px-10 xl:px-0">
      <div className="container mx-auto border-t border-white">
        <div>{children}</div>
        <div className="md:flex content-center pt-6 pb-20 md:pb-32 xl:pb-48">
          <div className="md:w-1/3 mb-16">
            <p className="text-md md:text-xl text-gray-300 sf-bold">
              2021 Achuta Anekal
            </p>
          </div>
          <div className="md:w-2/3">
            <ul className="flex justify-between md:justify-around">
              <li>
                <a className="sf-medium text-md md:text-xl text-white">Email</a>
              </li>
              <li>
                <a className="sf-medium text-md md:text-xl text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a className="sf-medium text-md md:text-xl text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
