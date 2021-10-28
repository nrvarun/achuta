import Content from "./Content";
import OverView from "./OverView";

const ZillSkillKids = () => {
  return (
    <section className="bg-white pt-8 md:pt-12 xl:pt-16">
      <div className="container mx-auto section-padding-x">
        <h1 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-2">
          ZILLSKILL
        </h1>
        <h2
          className="text-darkblue text-3xl md:text-4xl xl:text-6xl sf-semibold pr-4 md:pr-10 xl:pr-40 mb-12 md:mb-0"
          style={{ lineHeight: 1.065 }}
        >
          A learning community for kids
        </h2>
      </div>
      <OverView />
      <Content />
    </section>
  );
};

export default ZillSkillKids;
