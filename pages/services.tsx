import type { NextPage } from "next";
import Head from "next/head";
import Service from "../components/services/services";
const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mindev Solution | Services</title>
        <meta name="description" content="mindev solution Services" />
        <link rel="icon" href="/mbg.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Service />
    </div>
  );
};

export default Services;
