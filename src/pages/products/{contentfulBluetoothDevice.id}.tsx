import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function BluetoothDetail({
  data,
}: PageProps<Queries.BluetoothProductsQuery>) {
  const image = getImage(
    data.contentfulBluetoothDevice?.bluetoothPreview?.gatsbyImageData!
  );
  return (
    <Layout title={data.contentfulBluetoothDevice?.bluetoothName!}>
      <div id="container">
        <GatsbyImage
          image={image!}
          alt={data.contentfulBluetoothDevice?.bluetoothName!}
        ></GatsbyImage>
        <div id="productChoose">
          <h2>이곳은 제품 선택 파트입니다.</h2>
        </div>
      </div>
      <h2>{data.contentfulBluetoothDevice?.bluetoothName}</h2>
    </Layout>
  );
}

export const query = graphql`
  query BluetoothProducts($id: String!) {
    contentfulBluetoothDevice(id: { eq: $id }) {
      bluetoothName
      bluetoothPrice
      bluetoothPreview {
        gatsbyImageData(height: 600, width: 800, placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
