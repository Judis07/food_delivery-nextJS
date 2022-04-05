import Head from "next/head";
import Layout from "../components/Layout/layout";
import Banner from "../components/Banner/banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Layout>
          <Banner />
        </Layout>
      </div>
    </div>
  );
}
