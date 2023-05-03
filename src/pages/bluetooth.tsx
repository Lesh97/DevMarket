import { Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Bluetooth({
  data,
}: PageProps<Queries.AccessariesQuery>) {
  return (
    <Layout title="블루투스">
      <p>개발에 질을 올려주는 블루투스 제품들.</p>
      <div className="grid">
        {data.allContentfulPeripheralDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.preview?.gatsbyImageData!)!}
              alt={acc.name!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.name}</h2>
              <h4>₩{acc.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="블루투스" />;
