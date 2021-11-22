/* eslint-disable @next/next/no-img-element */
const HomeBanner = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto pb-24 md:pb-28 xl:pb-36">
        <div className="max-w-lg sm:max-w-lg px-3 xl:px-0 md:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl hd:max-w-6xl mx-auto">
          <h2
            className="text-2xl md:text-3xl xl:text-4.5xl 2xl:text-5xl hd:text-6xl text-center sf-medium text-white py-10 pb-16 md:py-20 xl:py-36 leading-smug px-5 md:px-16 xl:px-14"
            style={{
              lineHeight: 1.25,
            }}
          >
            A <span className="sf-bold">Product Designer</span> with a passion
            for human-centred design for emerging technologies. Enthusiastic
            user advocate for some of the biggest brands in Asia.
          </h2>
          <img
            src="/icons/arrow-banner.png"
            alt=""
            className="bg-white mx-auto rounded-full block animate-bounce w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
