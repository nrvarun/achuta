import Footer from "@components/Footer";
import Layout from "@components/Layout";
import type { NextPage } from "next";
import HomeBanner from "views/Home/HomeBanner";
import HomePortfolio from "views/Home/HomePortfolio";

const Home: NextPage = () => {
  return (
    <Layout bodyClasses="bg-black" title="Achuta - Portfolio">
      <HomeBanner />
      <HomePortfolio />
      <Footer />
    </Layout>
  );
};

export default Home;
