import React from "react";

const Footer = ({ children }: any) => {
  return (
    <footer className="bg-black section-padding-x">
      <div className="container mx-auto">
        {children && <div>{children}</div>}
        <div
          className="md:flex border-t border-white content-center pt-6 pb-14 md:pb-20 xl:pb-24"
          style={{
            borderColor: "#777777",
          }}
        >
          <div className="md:w-1/3 mb-16">
            <div className="flex items-center">
              <img
                src="/icons/copyright.png"
                alt="copyright"
                className="w-6 md:w-4 h-auto mr-1"
              />
              <p
                className="text-sm md:text-base sf-bold"
                style={{ color: "#999999" }}
              >
                2021 Achuta Anekal
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <ul className="flex justify-between md:justify-around ml-auto">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="sf-medium text-xs md:text-md md:text-base text-white"
                  href="mailto:achutaanekal@gmail.com"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="sf-medium text-xs md:text-md md:text-base text-white"
                  href="https://mobile.twitter.com/achutaanekal"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="sf-medium text-xs md:text-md md:text-base text-white"
                  href="https://www.linkedin.com/in/achutaanekal/"
                >
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
