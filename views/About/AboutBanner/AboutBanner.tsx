import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="min-h-screen bg-black py-10 pb-16 md:py-20 xl:py-36">
      <div className="container mx-auto px-5 xl:px-10 xl:mb-20">
        <div className="md:flex gap-8 md:gap-10 xl:gap-12">
          <div className="w-full md:w-2/5">
            <div className="w-full mb-8">
              <Image
                width={440}
                height={440}
                objectFit="cover"
                src="/assets/about/cover.png"
                alt="just a simple pic of me sitting :)"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <article className="md:pr-12">
              <p className="text-white sf-medium text-xl md:text-2xl xl:text-2.5xl mb-8 xl:mb-12 leading-tight">
                Hey there! I am an engineer by academic training and product
                designer by passion. What keeps me motivated endlessly is any
                unique opportunity to design data-informed products that can
                impact millions of people in this connected and diverse world.
              </p>
              <p className="text-white sf-medium text-xl md:text-2xl xl:text-2.5xl leading-tight">
                I am passionate about applying my ingrained creativity and
                critical thinking to product strategy, experience design, and
                design eminence. I keep human-centered design at the core of all
                my products and ensure that it is impactful, resplendent, and
                practical at any scale or formfactor. I'm always looking for
                opportunities to learn and work with people who have excelled in
                tenets of human-centered product design.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
