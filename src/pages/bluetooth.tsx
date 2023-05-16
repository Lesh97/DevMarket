import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Bluetooth({
  data,
}: PageProps<Queries.BluetoothesQuery>) {
  return (
    <Layout title="블루투스, 내 삶을 한 층 더 편리하게 ">
      <div className="grid">
        {data.allContentfulBluetoothDevice.nodes.map((acc) => (
          <article>
            <GatsbyImage
              image={getImage(acc.bluetoothPreview?.gatsbyImageData!)!}
              alt={acc.bluetoothName!}
            />
            <Link to={`/products/${acc.id}`}>
              <h2>{acc.bluetoothName}</h2>
              <h4>₩{acc.bluetoothPrice}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const bluetoothquery = graphql`
  query Bluetoothes {
    allContentfulBluetoothDevice {
      nodes {
        id
        bluetoothName
        bluetoothPrice
        bluetoothPreview {
          gatsbyImageData(placeholder: BLURRED, height: 400, width: 400)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="블루투스" />;
