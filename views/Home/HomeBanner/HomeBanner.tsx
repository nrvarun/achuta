const HomeBanner = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto max-w-5xl pb-36">
        <h2 className="text-5xl text-center sf-medium text-white py-36 leading-tight px-10">
          A <span className="sf-bold">Product Designer</span> with a passion for
          emerging technologies and human-centred design. Enthusiastic user
          advocate for some of the biggest brands in SE Asia.
        </h2>
        <img
          src="/icons/banner-cta.svg"
          alt=""
          className="bg-white mx-auto rounded-full block animate-bounce"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
