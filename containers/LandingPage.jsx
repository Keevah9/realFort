import React from 'react'
import {Header, Footer} from '../containers'
import Head from 'next/head'
// import { useGeneralContext } from '../components/context'
const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>
            Real estate
        </title>
    </Head>
    <header className='py-6 w-full h-auto shadow-md md:px-0 px-8'>
        <Header />
    </header>
    <main className='w-full mx-auto  md:px-0' >
        {children}
    </main>
    <footer className='w-full bg-black text-white mx-auto '>
        <Footer/>
    </footer>
    </>
  )
}

export default LandingPage