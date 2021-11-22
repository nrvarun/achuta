import Link from "next/link";

import Portfolio from "@components/Portfolio";

const HomePortfolio = () => {
  return (
    <section className="bg-black px-8 md:px-12 lg:px-20 xl:px-0">
      <div className="container mx-auto pb-20 md:pb-40 xl:pb-56 xl:px-16 xxl:px-7 xlg:px-11 xxlg:px-2 hd:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 xl:gap-28 xl:mb-3">
          <div>
            <Link href="/" passHref>
              <a className="block cursor-default">
                <Portfolio
                  title=""
                  desc=""
                  image="/assets/portfolio/1.png"
                  locked
                />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/angelone-viz" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/2.png" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/angelone-web-portfolio" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/3.png" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/check" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/5.png" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/zillskill" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/4.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
