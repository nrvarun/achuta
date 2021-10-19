import Footer from "@components/Footer";
import Layout from "@components/Layout";
import type { NextPage } from "next";
import HomeBanner from "views/Home/HomeBanner";

const Home: NextPage = () => {
  return (
    <Layout bodyClasses="bg-black">
      <HomeBanner />
      <Footer />
    </Layout>
  );
};

export default Home;
