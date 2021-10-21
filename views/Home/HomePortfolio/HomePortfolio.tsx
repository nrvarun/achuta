import Link from "next/link";

import Portfolio from "@components/Portfolio";

const HomePortfolio = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto pb-20 xl:pb-40 section-padding-x">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 xl:gap-28">
          <div>
            <Link href="/" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
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
            <Link href="/" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/4.png" />
              </a>
            </Link>
          </div>
          <div>
            <Link href="/" passHref>
              <a className="block transform transition duration-500 hover:scale-105">
                <Portfolio title="" desc="" image="/assets/portfolio/5.png" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
