import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Keyboard({ data }: PageProps<Queries.KeyboardsQuery>) {
  return (
    <Layout title="키보드, 내 기분을 바꿔줄 타건감">
      <div className="grid">
        {data.allContentfulKeyboardDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.keyboardPreview?.gatsbyImageData!)!}
              alt={acc.keyboardName!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.keyboardName}</h2>
              <h4>₩{acc.keyboardPrice}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const keyboardquery = graphql`
  query Keyboards {
    allContentfulKeyboardDevice {
      nodes {
        id
        keyboardName
        keyboardPrice
        keyboardPreview {
          gatsbyImageData(placeholder: BLURRED, height: 400, width: 400)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="키보드" />;
