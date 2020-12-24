import "../styles/globals.css";
import "../styles/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Sarmiento Media &#8211; DC Based Video Creator &amp; Wedding
          Videographer.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
