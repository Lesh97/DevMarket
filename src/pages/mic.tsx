import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Mic({ data }: PageProps<Queries.MicsQuery>) {
  return (
    <Layout title="마이크, 의사 전달의 대변인.">
      <div className="grid">
        {data.allContentfulMicDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.micPreview?.gatsbyImageData!)!}
              alt={acc.micName!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.micName}</h2>
              <h4>₩{acc.micPrice}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const micquery = graphql`
  query Mics {
    allContentfulMicDevice {
      nodes {
        id
        micName
        micPrice
        micPreview {
          gatsbyImageData(placeholder: BLURRED, height: 400, width: 400)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="마이크" />;
