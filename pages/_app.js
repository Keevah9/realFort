import '../styles/globals.css'
import React from 'react';
import LandingPage from '../containers/LandingPage';
import NProgress from 'nprogress';
import {AppProvider} from '../components/context'
import Router from "next/router";
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    NProgress.configure({ showSpinner: false });

    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

  return (
    <AppProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <LandingPage>
        <Component {...pageProps} />
      </LandingPage>
    </AppProvider>
  );
}

export default MyApp
