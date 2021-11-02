import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="bg-black py-10 pb-12 md:py-16 xl:py-32">
      <div className="container mx-auto section-padding-x xl:mb-20">
        <div className="md:flex gap-8 md:gap-10 xl:gap-12">
          <div className="w-full md:w-2/5">
            <div className="w-full mb-8">
              <Image
                width={460}
                height={460}
                objectFit="cover"
                src="/assets/about/cover.png"
                alt="just a simple pic of me sitting :)"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <article className="md:pr-12 lg:pr-1 xl:pr-12">
              <p
                className="text-white sf-medium text-md md:text-xl xxl:text-2xl mb-8 xl:mb-12"
                style={{ lineHeight: 1.5 }}
              >
                Hey there! I am an engineer by academic training and a product
                designer by passion. What keeps me motivated endlessly is any
                unique opportunity to design data-informed products that can
                impact millions of people in this connected and diverse world.
              </p>
              <p
                className="text-white sf-medium text-md md:text-xl xxl:text-2xl"
                style={{ lineHeight: 1.5 }}
              >
                I am passionate about applying my ingrained creativity and
                critical thinking to product strategy, experience design, and
                design eminence. I keep human-centered design at the core of all
                my products and ensure that it is impactful, resplendent, and
                practical at any scale or form factor. I'm always looking for
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
