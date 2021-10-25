import Text from "@components/Text";
import React from "react";

const OverView = () => {
  return (
    <div className="container mx-auto section-padding-x">
      <div className="md:flex mt-4 md:mt-8 xl:mt-12">
        <div className="w-full md:w-2/3 pr-32">
          <Text
            content="OVERVIEW"
            classes="text-gray-500 mb-4 md:mb-6 sf-bold"
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="ZILLSKILL is a platform that provides a learning community for kids to bring out the best in them and explore their inner passion. They can engage in interactive activities with learning opportunities while interacting with their peers. We were responsible for delivering an enriching and engaging experience that allow kids to do stuff they are deeply passionate about, whethers it’s building a game on Roblox or becoming a YouTuber."
          />
          <Text
            style={{ lineHeight: 1.5 }}
            classes="mb-4 md:mb-8 xl:mb-12 xl:text-2xl"
            content="In the case study I will showcase how I built a unique journey to help kids discover their inner curiosities and natural capabilities through design. I collaborated closely with the founding team and a child psychiatrist who helped me empathize and understand kids’ mental models and how their cognitive abilities and evolve over time."
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
              content="Bikash Prajapat, Business Analyst"
              classes="mb-1 xl:text-2xl"
            />
            <Text
              content="Saiaditya Garyali, Designer"
              classes="mb-1 xl:text-2xl"
            />
            <Text
              content="ZILLSKILL founding team"
              classes="mb-1 xl:text-2xl"
            />
            <Text
              content="Dr. Shafali Batra, Child Psychairist"
              classes="xl:text-2xl"
            />
          </div>
          <div className="mb-4 md:mb-8 xl:mb-12">
            <Text content="TIMELINE" classes="text-gray-500 mb-2 sf-bold" />
            <Text content="Feb 2021 (2 weeks)" classes="xl:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
