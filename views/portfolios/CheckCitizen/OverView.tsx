import Text from "@components/Text";
import React from "react";

const OverView = () => {
  return (
    <div className="container mx-auto section-padding-x">
      <div className="md:flex mt-4 md:mt-8 xl:mt-12">
        <div className="w-full md:w-2/3 md:pr-16 xl:pr-24 mb-12 md:mb-0">
          <Text
            content="OVERVIEW"
            classes="text-gray-500 mb-4 md:mb-6 sf-bold"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-1 xl:text-2xl"
            content="To help curb rising traffic violations in Bengaluru city, the police released an application called Public Eye that empowers citizens to report violations on the road.  In the final semester of my 4 year engineering course, my team of two engineers and I set out to completely redesign this experience by bringing consumer growth tactics like virality and game design.  As the project lead, I was responsible for product ideation, studying user behaviour and crafting a compelling experience. I also assisted my team in writing algorithms for an optimized neural network to perform machine learning for automatic violation detection."
          />
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="ROLE" classes="text-gray-500 mb-2 sf-bold" />
            <Text content="UX Designer" classes="xl:text-2xl mb-1" />
            <Text
              content="Machine Learning Engineer"
              classes="xl:text-2xl mb-1"
            />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text
              content="COLLABORATORS"
              classes="text-gray-500 mb-2 sf-bold"
            />
            <Text
              content="Karthik Achanta, Engineer"
              classes="mb-1 xl:text-2xl"
            />
            <Text content="Aditya P, Engineer" classes="mb-1 xl:text-2xl" />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="TIMELINE" classes="text-gray-500 mb-2 sf-bold" />
            <Text content="Jan 2020 - Apr 2020" classes=" xl:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
