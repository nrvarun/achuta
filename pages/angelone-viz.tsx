import type { NextPage } from "next";

import Footer from "@components/Footer";
import Layout from "@components/Layout";
import Outcomes from "@components/Outcomes";
import AngelOneViz from "@views/portfolios/AngelOneViz";

const AngelOneVisualHierarchy: NextPage = () => {
  return (
    <Layout title="Achuta - Angel One Visual Hierarchies and Patterns">
      <AngelOneViz />
      <Outcomes
        title="Outcomes I helped drive"
        color="#995F28"
        backgroundColor="#FFF2E4"
        list={[
          "Laid the ground work to define the architecture of the platform",
          "User agnostic workflows to address different skill levels",
          "Streamlined the functionality to mirror users’ mental models",
        ]}
      />
      <Footer />
    </Layout>
  );
};

export default AngelOneVisualHierarchy;
