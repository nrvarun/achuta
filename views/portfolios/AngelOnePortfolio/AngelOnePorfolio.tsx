import Content from "./Content";
import OverView from "./OverView";

const AngelOnePortfolio = () => {
  return (
    <section className="bg-white pt-8 md:pt-12 xl:pt-16 section-padding-x">
      <div className="portfolio-container mx-auto mb-12 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-4.75xl xl:text-6.5xl sf-bold mb-3 md:mb-4">
          AngelOne
        </h1>
        <h2
          className="text-meddarkblue text-3xl md:text-4xl lg:text-4.75xl xl:text-6.5xl sf-semibold pr-2 xl:pr-40"
          style={{ lineHeight: 1.065 }}
        >
          Web portfolio manager
        </h2>
      </div>
      <OverView />
      <Content />
    </section>
  );
};

export default AngelOnePortfolio;
