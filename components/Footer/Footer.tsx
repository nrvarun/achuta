import React from "react";

const Footer = ({ children }: any) => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto border-t border-white">
        <div>{children}</div>
        <div className="flex content-center pt-6 pb-40">
          <div className="w-1/3">
            <p className="text-xl text-gray-300 sf-bold">2021 Achuta Anekal</p>
          </div>
          <div className="w-2/3">
            <ul className="flex justify-around">
              <li>
                <a className="sf-medium text-xl text-white">Email</a>
              </li>
              <li>
                <a className="sf-medium text-xl text-white">Twitter</a>
              </li>
              <li>
                <a className="sf-medium text-xl text-white">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
