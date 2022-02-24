import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToogleProvider } from "../context/toogler";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main">
      <div className="mindev">
        <ToogleProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToogleProvider>
      </div>
    </div>
  );
}

export default MyApp;
