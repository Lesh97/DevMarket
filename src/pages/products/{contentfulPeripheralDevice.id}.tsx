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
      <GatsbyImage
        image={image!}
        alt={data.contentfulPeripheralDevice?.name!}
      ></GatsbyImage>
      <h2>${data.contentfulPeripheralDevice?.name}</h2>
      <div />
    </Layout>
  );
}

export const query = graphql`
  query Products($id: String!) {
    contentfulPeripheralDevice(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(height: 10, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
