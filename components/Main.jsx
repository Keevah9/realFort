import React from 'react'
import Image from 'next/image'
import homeImg from '../public/assets/real1.jpeg'
const Main = () => {
  return (
    <div className=''>
      <h1 className=' text-[15.8vw] sm:text-[16.4vw] md:text-[15.3vw] lg:text-[12vw] tracking-[-0.05em]  font-bold'>RENTALFORT</h1>
      <Image
      src={homeImg}
      min-width={600}
      height={600}
      alt='houses'
      />
      <div className='my-6 border-b-2 w-full '></div>
    </div>
  )
}

export default Main