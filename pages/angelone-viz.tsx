import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import AngelOneViz from "@views/portfolios/AngelOneViz";

const AngelOneVisualHierarchy: NextPage = () => {
  return (
    <Layout
      title="Achuta - Angel One Visual Hierarchies and Patterns"
      hasScroll
    >
      <AngelOneViz />
      <Outcomes
        title="Outcomes I helped drive"
        color="#995F28"
        backgroundColor="#FFF2E4"
        list={[
          "Laid the ground work to define the architecture of the platform",
          "User agnostic workflows to address different skill levels",
          "Streamlined the functionality to mirror users’ mental models",
        ]}
      />
      <Footer>
        <div className="py-12 md:py-16 xl:py-24">
          <div className="flex">
            <div className="w-1/2">
              <a className="flex">
                <div className="flex">
                  <div className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 flex content-center m-auto">
                    <Image
                      src="/icons/arrow-white.svg"
                      width={36}
                      height={36}
                      className="rotate-180"
                      alt="previous case study"
                    />
                  </div>
                </div>
                <div className="ml-4 md:ml-6">
                  <div className="flex items-center mb-1 md:mb-3">
                    <h4 className="text-white text-base sf-bold md:text-md xl:text-3.5xl mr-2">
                      Grab
                    </h4>
                    <img src="/icons/lock.svg" alt="" className="" />
                  </div>
                  <p className="text-white text-xs md:text-base xl:text-md sf-bold">
                    Ads and personalization tech
                  </p>
                </div>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/angelone-web-portfolio">
                <a className="flex">
                  <div className="mr-4 md:mr-6 ml-auto">
                    <h4 className="text-white text-base md:text-md xl:text-3.5xl mb-1 md:mb-3 sf-bold">
                      AngelOne
                    </h4>
                    <p className="text-white text-xs md:text-base xl:text-md sf-bold">
                      Web portfolio manager
                    </p>
                  </div>
                  <div className="flex">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-9 lg:h-9 flex content-center m-auto">
                      <Image
                        src="/icons/arrow-white-right.svg"
                        width={36}
                        height={36}
                        className="rotate-180"
                        alt="previous case study"
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default AngelOneVisualHierarchy;
