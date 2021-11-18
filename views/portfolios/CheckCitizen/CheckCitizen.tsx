import Content from "./Content";
import OverView from "./OverView";

const ZillSkillKids = () => {
  return (
    <section className="bg-white pt-8 md:pt-12 xl:pt-16 section-padding-x">
      <div className="portfolio-container mx-auto">
        <h1 className="text-3xl md:text-4xl xl:text-6.5xl sf-bold mb-2">
          Check
        </h1>
        <h2
          className="text-lightdarkgrey text-3xl md:text-4xl xl:text-6.5xl sf-semibold md:pr-10 xl:pr-40 mb-12 md:mb-0"
          style={{ lineHeight: 1.065 }}
        >
          A citizen-driven violation reporting app
        </h2>
      </div>
      <OverView />
      <Content />
    </section>
  );
};

export default ZillSkillKids;
