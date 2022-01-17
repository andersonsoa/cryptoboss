import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout asPath={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
