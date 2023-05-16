import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductsQuery>) {
  const image = getImage(
    data.contentfulPeripheralDevice?.preview?.gatsbyImageData!
  );
  return (
    <Layout title={data.contentfulPeripheralDevice?.name!}>
      <div id="container">
        <GatsbyImage
          image={image!}
          alt={data.contentfulPeripheralDevice?.name!}
        ></GatsbyImage>
        <div id="productChoose">
          <h2>이곳은 제품 선택 파트입니다.</h2>
        </div>
      </div>
      <h2>{data.contentfulPeripheralDevice?.name}</h2>
    </Layout>
  );
}

export const query = graphql`
  query Products($id: String!) {
    contentfulPeripheralDevice(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 600, width: 800, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
