import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="About-us">
      <p>개발에 필요한 다양한 악세서리들, 제품을 만나보세요!</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About-us" />;
