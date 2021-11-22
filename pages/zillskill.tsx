import type { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import ZillSkillKids from "@views/portfolios/ZillSkillKids";

const ZillSkill: NextPage = () => {
  return (
    <Layout title="Achuta - ZILLSKILL A learning community for kids" hasScroll>
      <ZillSkillKids />
      <Outcomes
        title="Outcomes I helped drive"
        color="#1E186A"
        backgroundColor="#C9C8F2"
        list={[
          "Provided tangible and result oriented assessment for kids",
          "Enabled a visually vibrant experience for kids to discover inner passions",
          "Enhanced user engagement avenues by studying kids psychology",
        ]}
      />
      <Footer>
        <div className="py-12 md:py-16 xl:py-24">
          <div className="flex">
            <div className="w-1/2">
              <Link href="/check">
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
                      Check
                    </h4>
                    <p className="text-white text-xs  md:text-base xl:text-md sf-bold">
                      Citizen-driven violation reporting app
                    </p>
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

export default ZillSkill;
