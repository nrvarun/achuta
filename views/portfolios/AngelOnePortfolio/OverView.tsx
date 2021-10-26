import Text from "@components/Text";
import React from "react";

const OverView = () => {
  return (
    <div className="container mx-auto section-padding-x">
      <div className="md:flex mt-4 md:mt-8 xl:mt-12">
        <div className="w-full md:w-2/3 md:pr-16 xl:pr-32 mb-12 md:mb-0">
          <Text
            content="OVERVIEW"
            classes="text-gray-500 mb-4 md:mb-6 sf-bold"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="AngelOne is going through a digital transformation, wherein they are completely redesigning their stock trading applications with focused objective to appeal to Gen-Z and Millennial traders. I was responsible for working across the AngelOne’s stock trading products from designing and the shipping the stock overview and fundamentals page to the portfolio manager."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="In this case study I will showcase how we built the portfolio management experience on the web platform. This is an important module of the trading app with significant user interaction and focus. I worked closely with a business analyst, another designer and subject matter experts to understand trading behavior and data interactions."
          />
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="ROLE" classes="text-gray-500 mb-2 sf-bold" />
            <Text content="UX Designer" classes="xl:text-2xl" />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text
              content="COLLABORATORS"
              classes="text-gray-500 mb-2 sf-bold"
            />
            <Text
              content="Jai Prasanna, Business Analyst"
              classes="mb-1 xl:text-2xl"
            />
            <Text content="Sam Joshua, Designer" classes="xl:text-2xl" />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="TIMELINE" classes="text-gray-500 mb-2 sf-bold" />
            <Text content="January 2021 (4 weeks)" classes="xl:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
