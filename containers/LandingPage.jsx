import React from 'react'
import {Header, Footer} from '../containers'
import Head from 'next/head'

const LandingPage = ({children}) => {
  return (
    <>
    <Head>
        <title>
            Real estate
        </title>
    </Head>
    <header className='py-6 w-full h-auto shadow-md md:px-0 px-10'>
        <Header />
    </header>
    <main className='w-full mx-auto md:w-5/6 lg:w-4/6 pb-6 px-8 h-auto md:px-0'>
        {children}
    </main>
    <footer className='w-full bg-black text-white'>
        <Footer/>
    </footer>
    </>
  )
}

export default LandingPage