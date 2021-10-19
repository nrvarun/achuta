/* eslint-disable @next/next/no-img-element */
const HomeBanner = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto max-w-5xl pb-24 md:pb-28 xl:pb-36">
        <h2 className="text-2xl md:text-3xl xl:text-5xl text-center sf-medium text-white py-10 pb-16 md:py-20 xl:py-36 leading-smug xl:leading-tight px-5 md:px-16 xl:px-10">
          A <span className="sf-bold">Product Designer</span> with a passion for
          emerging technologies and human-centred design. Enthusiastic user
          advocate for some of the biggest brands in SE Asia.
        </h2>
        <img
          src="/icons/banner-cta.svg"
          alt=""
          className="bg-white mx-auto rounded-full block animate-bounce w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
