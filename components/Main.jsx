import React from 'react'
import Image from 'next/image'

const Main = ({head, image}) => {
  return (
    <div className='mx-auto pb-6 '>
      <h1 className=' text-[15.8vw] sm:text-[16.4vw] md:text-[15.3vw] lg:text-[12vw] tracking-[-0.05em]   font-bold'>{head}</h1>
      <div className=' px-2'>
        <img
      src={image}
      
      alt='houses'
      className='w-full h-[30rem] 2xl:h-[35rem]'
      />
      <div className='my-6 border-b-2 '></div>
      </div>
      
    </div>
  )
}

export default Main