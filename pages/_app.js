import GlobalStyle from "../components/GlobalStyles";
import Layout from "../components/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
