import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function KeyboardDetail({
  data,
}: PageProps<Queries.KeyboardsProductsQuery>) {
  const image = getImage(
    data.contentfulKeyboardDevice?.keyboardPreview?.gatsbyImageData!
  );
  return (
    <Layout title={data.contentfulKeyboardDevice?.keyboardName!}>
      <div id="container">
        <GatsbyImage
          image={image!}
          alt={data.contentfulKeyboardDevice?.keyboardName!}
        ></GatsbyImage>
        <div id="productChoose">
          <h2>이곳은 제품 선택 파트입니다.</h2>
        </div>
      </div>
      <h2>{data.contentfulKeyboardDevice?.keyboardName}</h2>
    </Layout>
  );
}

export const query = graphql`
  query KeyboardsProducts($id: String!) {
    contentfulKeyboardDevice(id: { eq: $id }) {
      keyboardName
      keyboardPrice
      keyboardPreview {
        gatsbyImageData(height: 600, width: 800, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
