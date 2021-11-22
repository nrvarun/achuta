import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to site!</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
