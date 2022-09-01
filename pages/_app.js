import '../styles/globals.css'
import React from 'react';
import LandingPage from '../containers/LandingPage';


function MyApp({ Component, pageProps }) {
  return (
    <LandingPage>
      <Component {...pageProps} />
    </LandingPage>
  )
}

export default MyApp
