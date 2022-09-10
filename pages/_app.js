import '../styles/globals.css'
import React from 'react';
import LandingPage from '../containers/LandingPage';
import nProgress from 'nprogress';
import {AppProvider} from '../components/context'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <LandingPage>
        <Component {...pageProps} />
      </LandingPage>
     </AppProvider>
  );
}

export default MyApp
