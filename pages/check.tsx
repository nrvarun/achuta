import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import CheckCitizen from "@views/portfolios/CheckCitizen";

const Check: NextPage = () => {
  return (
    <Layout title="Achuta - Check A learning community for kids" hasScroll>
      <CheckCitizen />
      <Outcomes
        title="Outcomes I helped drive"
        color="#464646"
        backgroundColor="#D3D3D3"
        list={[
          "Built a community driven hyperlocal traffic enforcement app.",
          "Faster and effective violation detections through a state of the art neural engine.",
          "Significant enhancement to the UX by intrinsically motivating users.",
        ]}
      />
      <Footer>
        <div className="py-12 md:py-16 xl:py-24">
          <div className="flex">
            <div className="w-1/2">
              <Link href="/angelone-web-portfolio">
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
                    <h4 className="text-white text-base sf-bold md:text-xl lg:text-2xl xl:text-3.5xl mb-2 md:mb-3">
                      AngelOne
                    </h4>
                    <p className="text-white text-xs  md:text-base xl:text-md sf-bold">
                      Web portfolio manager
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/zillskill">
                <a className="flex">
                  <div className="mr-4 md:mr-6 ml-auto">
                    <h4 className="text-white text-base md:text-xl lg:text-2xl xl:text-3.5xl mb-1 md:mb-3 sf-bold uppercase">
                      Zillskill
                    </h4>
                    <p className="text-white text-xs md:text-base xl:text-md sf-bold">
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

export default Check;
