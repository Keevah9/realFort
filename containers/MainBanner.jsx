import React from 'react'
import {Main} from '../components'
import homeImg from '../public/assets/home1.jpeg'
const MainBanner = () => {
  return (
    <section className='mb-20 '>
        <Main
        head='RENTALFORT'
        image={homeImg}
        />
    </section>
  )
}

export default MainBanner