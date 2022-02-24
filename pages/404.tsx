import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Costume404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mindev Solution |page 404</title>
        <meta name="description" content="mindev solution Costume404" />
        <link rel="icon" href="/mbg.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="costume404">
        <div className="label">
          <h3>Mindev Solution</h3>
          <h1>Page not Found </h1>
        </div>

        <Link href="/">
          <button>Go to Mindev Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Costume404;
