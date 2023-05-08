import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Camera({ data }: PageProps<Queries.CamerasQuery>) {
  return (
    <Layout title="카메라, 원격에 필수품, 내 모습을 비춰주는 거울">
      <div className="grid">
        {data.allContentfulCameraDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.cameraPreview?.gatsbyImageData!)!}
              alt={acc.cameraName!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.cameraName}</h2>
              <h4>₩{acc.cameraPrice}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const cameraquery = graphql`
  query Cameras {
    allContentfulCameraDevice {
      nodes {
        id
        cameraName
        cameraPrice
        cameraPreview {
          gatsbyImageData(placeholder: BLURRED, height: 400, width: 400)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="카메라" />;
