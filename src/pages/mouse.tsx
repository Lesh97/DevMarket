import { Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Mouse({ data }: PageProps<Queries.AccessariesQuery>) {
  return (
    <Layout title="마우스">
      <p>내 손에 알맞는, 최적의 마우스.</p>
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

export const Head = () => <Seo title="마우스" />;
