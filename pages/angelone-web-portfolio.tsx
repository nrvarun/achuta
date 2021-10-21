import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import AngelOnePorfolio from "@views/portfolios/AngelOnePortfolio";

const AngelOneWebPorfolio: NextPage = () => {
  return (
    <Layout title="Achuta - Angel One Visual Hierarchies and Patterns">
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
              <Link href="/">
                <a className="flex">
                  <Image
                    src="/icons/arrow-white.svg"
                    width={36}
                    height={36}
                    alt="previous case study"
                  />
                  <div className="ml-4 md:ml-6">
                    <h4 className="text-white text-sm sf-bold md:text-md xl:text-3.5xl mb-2">
                      Grab
                    </h4>
                    <p className="text-white text-md md:text-base sf-bold">
                      Ads and personalization tech
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/">
                <a className="flex">
                  <div className="mr-4 md:mr-6 ml-auto">
                    <h4 className="text-white text-sm md:text-md xl:text-3.5xl mb-2 sf-bold">
                      AngelOne
                    </h4>
                    <p className="text-white text-md md:text-base sf-bold">
                      Web portfolio manager
                    </p>
                  </div>
                  <Image
                    src="/icons/arrow-white-right.svg"
                    width={36}
                    height={36}
                    className="rotate-180"
                    alt="previous case study"
                  />
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
