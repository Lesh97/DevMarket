import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function MicDetail({
  data,
}: PageProps<Queries.MicProductsQuery>) {
  const image = getImage(
    data.contentfulMicDevice?.micPreview?.gatsbyImageData!
  );
  return (
    <Layout title={data.contentfulMicDevice?.micName!}>
      <div id="container">
        <GatsbyImage
          image={image!}
          alt={data.contentfulMicDevice?.micName!}
        ></GatsbyImage>
        <div id="productChoose">
          <h2>이곳은 제품 선택 파트입니다.</h2>
        </div>
      </div>
      <h2>{data.contentfulMicDevice?.micName}</h2>
    </Layout>
  );
}

export const query = graphql`
  query MicProducts($id: String!) {
    contentfulMicDevice(id: { eq: $id }) {
      micName
      micPrice
      micPreview {
        gatsbyImageData(height: 600, width: 800, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
