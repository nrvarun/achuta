import Footer from "@components/Footer";
import Layout from "@components/Layout";
import AboutBanner from "@views/About/AboutBanner";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout title="Achuta - About me">
      <AboutBanner />
      <Footer />
    </Layout>
  );
};

export default About;
