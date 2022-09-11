import React from 'react'
import {Main} from '../components'
import homeImg from '../public/assets/home1.jpeg'
const MainBanner = () => {
  return (
    <section className='mb-20 md:w-5/6 lg:w-4/6 mx-auto pb-6 px-8 md:px-0 h-auto'>
        <Main
        head='RENTALFORT'
        image='/assets/home1.jpeg'
        />
    </section>
  )
}

export default MainBanner