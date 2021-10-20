import Text from "@components/Text";
import React from "react";

const OverView = () => {
  return (
    <div className="container mx-auto px-5 xl:px-10">
      <div className="md:flex mt-4 md:mt-8 xl:mt-12">
        <div className="w-full md:w-2/3 pr-32">
          <Text content="OVERVIEW" classes="text-gray-500 mb-4 md:mb-6" />
          <Text
            classes="mb-4 md:mb-8 xl:mb-12"
            content="AngelOne aims to empower and democratize the financial system by allowing people to partake as retail investors in any corner of India. As an Experience Designer I was reponsible for the creation of a unified web experience for any user but more specifically catering to pro and intermediate users who use larger displays to minutely analyze and trade financial instruments."
          />
          <Text content="As a user experience designer, I defined visual hierarchies and data organization to establish relationships between the different modules of the web application. I closely collaborated with product support specialists to ensure that the experience would be cohesive and intuitive while maintain data integrity." />
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="ROLE" classes="text-gray-500 mb-2" />
            <Text content="UX Designer" />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="COLLABORATORS" classes="text-gray-500 mb-2" />
            <Text content="Jai Prasanna, Business Analyst" classes="mb-1" />
            <Text content="Sam Joshua, Designer" />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="TIMELINE" classes="text-gray-500 mb-2" />
            <Text content="Nov 2020 (2 weeks)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
