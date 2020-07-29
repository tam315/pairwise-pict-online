import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-116967778-8"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-116967778-8');
    </script> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generate pairwise testcases online" />
        <title>Pairwise Pict Online</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
