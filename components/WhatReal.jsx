import React from 'react'
import Image from 'next/image'
const WhatReal = ({photo1, url, photo2, heading,desc,buttonText}) => {
  return (
    <>
      <div className='md:w-1/2'>
        <h3 className=' w-full text-center sm:text-left text-[4vw] md:text-[2.8vw] lg:text-[2vw] tracking-[-0.05em] font-bold '>{heading}</h3>
        <div className='border-t border-2 mx-auto sm:mx-0 w-[15rem]'>
        </div>
        <p className='py-6'>{desc}</p>
        <div className='my-10'>
          <a href={url} className='my-4 rounded-2xl bg-black px-4 py-2 text-white block mx-auto md:mx-0 w-fit'>{buttonText}</a>
        </div>
        <img src={photo2}
          alt='houses' className='sm:h-[250px]   w-full block mx-auto md:mx-0'/>
          <div className='border-t mt-6 border-2 mx-auto sm:mx-0 w-[15rem] hidden md:block'>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img src={photo1}
      alt='houses' className='h-[47rem] w-full'/>
      </div>
    </>
  )
}

export default WhatReal