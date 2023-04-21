import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

export default function IndexPage({
  data,
}: PageProps<Queries.AccessariesQuery>) {
  return (
    <Layout title="welcome to my dev accessary">
      <div className="grid">
        {data.allContentfulPeripheralDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.preview?.gatsbyImageData!)!}
              alt={acc.name!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.name}</h2>
              <h4>${acc.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Accessaries {
    allContentfulPeripheralDevice {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
