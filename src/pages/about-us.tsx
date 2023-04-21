import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About-us">
      <p>We are the happies accessary store.12</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About-us" />;
