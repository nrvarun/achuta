import React from "react";

const Footer = ({ children }: any) => {
  return (
    <footer className="bg-black xl:px-0">
      <div className="container mx-auto">
        <div>{children}</div>
        <div className="md:flex border-t border-white content-center pt-6 pb-14 md:pb-20 xl:pb-24">
          <div className="md:w-1/3 mb-16">
            <p
              className="text-md md:text-base sf-bold"
              style={{ color: "#999999" }}
            >
              2021 Achuta Anekal
            </p>
          </div>
          <div className="md:w-2/3">
            <ul className="flex justify-between md:justify-around max-w-xl ml-auto">
              <li>
                <a className="sf-medium text-xs md:text-md md:text-base text-white">
                  Email
                </a>
              </li>
              <li>
                <a className="sf-medium text-xs md:text-md md:text-base text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a className="sf-medium text-xs md:text-md md:text-base text-white">
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
