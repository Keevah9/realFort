import React from 'react'
import Image from 'next/image'

const Main = ({head, image}) => {
  return (
    <div className='mx-auto md:w-5/6 lg:w-4/6 pb-6 px-4'>
      <h1 className=' text-[15.8vw] sm:text-[16.4vw] md:text-[15.3vw] lg:text-[12vw] tracking-[-0.05em] text-center  font-bold'>{head}</h1>
      <Image
      src={image}
      min-width={600}
      height={600}
      alt='houses'
      />
      <div className='my-6 border-b-2 w-full '></div>
    </div>
  )
}

export default Main