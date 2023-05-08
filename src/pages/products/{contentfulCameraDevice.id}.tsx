import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function CameraDetail({
  data,
}: PageProps<Queries.CameraProductsQuery>) {
  const image = getImage(
    data.contentfulCameraDevice?.cameraPreview?.gatsbyImageData!
  );
  return (
    <Layout title={data.contentfulCameraDevice?.cameraName!}>
      <div id="container">
        <GatsbyImage
          image={image!}
          alt={data.contentfulCameraDevice?.cameraName!}
        ></GatsbyImage>
        <div id="productChoose">
          <h2>hihi</h2>
        </div>
      </div>
      <h2>{data.contentfulCameraDevice?.cameraName}</h2>
    </Layout>
  );
}

export const query = graphql`
  query CameraProducts($id: String!) {
    contentfulCameraDevice(id: { eq: $id }) {
      cameraName
      cameraPrice
      cameraPreview {
        gatsbyImageData(height: 600, width: 800, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
