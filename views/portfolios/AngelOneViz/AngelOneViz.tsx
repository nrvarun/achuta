import Content from "./Content";
import OverView from "./OverView";

const AngelOneViz = () => {
  return (
    <section className="bg-white py-8 md:py-12 xl:py-16">
      <div className="container mx-auto px-5 xl:px-10">
        <h1 className="text-3xl md:text-4xl xl:text-6xl sf-bold mb-2">
          AngelOne
        </h1>
        <h2 className="text-gold text-3xl md:text-4xl xl:text-6xl sf-bold pr-10 xl:pr-40">
          Visual hierarchies and patterns for stock trading web application
        </h2>
      </div>
      <OverView />
      <Content />
    </section>
  );
};

export default AngelOneViz;
