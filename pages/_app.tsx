import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main">
      <div className="mindev">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
  );
}

export default MyApp;
