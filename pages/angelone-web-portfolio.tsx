import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import AngelOnePorfolio from "@views/portfolios/AngelOnePortfolio";

const AngelOneWebPorfolio: NextPage = () => {
  return (
    <Layout
      title="Achuta - Angel One Visual Hierarchies and Patterns"
      hasScroll
    >
      <AngelOnePorfolio />
      <Outcomes
        title="Outcomes I helped drive"
        color="#375499"
        backgroundColor="#CAD9FF"
        list={[
          "Simplified interactions between key sections of the portfolio",
          "User-centric information nuggets to draw deep insights",
          "Effecient stock trading workflow with user specific nuaces",
        ]}
      />
      <Footer>
        <div className="py-12 md:py-16 xl:py-24">
          <div className="flex">
            <div className="w-1/2">
              <Link href="/angelone-viz">
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
                    <h4 className="text-white text-base sf-bold md:text-md xl:text-3.5xl mb-3">
                      AngelOne
                    </h4>
                    <p className="text-white text-xs  md:text-base xl:text-md sf-bold">
                      Defining visual hierachies and patterns
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/zillskill">
                <a className="flex">
                  <div className="mr-4 md:mr-6 ml-auto">
                    <h4 className="text-white text-sm md:text-md xl:text-3.5xl mb-3 sf-bold">
                      ZILLSKILL
                    </h4>
                    <p className="text-white text-xs  md:text-base xl:text-md sf-bold">
                      A learning community for kids
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

export default AngelOneWebPorfolio;
