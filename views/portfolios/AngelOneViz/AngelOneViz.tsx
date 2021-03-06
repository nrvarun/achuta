import Content from "./Content";
import OverView from "./OverView";

const AngelOneViz = () => {
  return (
    <section className="bg-white py-8 md:py-12 xl:py-16 section-padding-x">
      <div className="portfolio-container mx-auto mb-12 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-4.75xl xl:text-6.5xl sf-bold mb-3 md:mb-4">
          AngelOne
        </h1>
        <h2
          className="text-gold text-3xl md:text-4xl lg:text-4.75xl xl:text-6.5xl sf-semibold sm:pr-12 md:pr-20 xl:pr-24"
          style={{ lineHeight: 1.065 }}
        >
          Visual hierarchies and patterns for stock trading web application
        </h2>
      </div>
      <OverView />
      <Content />
    </section>
  );
};

export default AngelOneViz;
