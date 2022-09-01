import React from 'react'
import Link from 'next/link'

const FAQ = () => {
  return (
    <div className='w-full md:flex gap-12 my-24 '>
      <div className='md:w-1/2 flex items-center justify-between md:block'>
        <div>
          <h3 className='w-full text-center sm:text-left text-[4vw] md:text-[2.8vw] lg:text-[2vw] tracking-[-0.05em] font-bold '>Get to know us</h3>
        <p className='text-3xl font-bold pt-16'>Our culture</p>
        <ul className='py-6'>
          <li className='py-4'><a href='/About#what' scroll={false}>What is RentalFort?</a></li>
          <li className='py-4'><a href='/About#why' scroll={false}>Why US?</a></li>
          <li className='pt-4'><a href='/About#types' scroll={false}>What are the property types in RentalFort?</a></li>
          
        </ul>
        </div>
        <button className='h-fit mb-8 md:mt-10 rounded-xl px-6 py-2 bg-black text-white'><a href="/About#news" scroll={false}>Join US </a></button>
      </div>
      <div className='md:w-1/2'>
        <img
        src='/assets/rent.webp'
        alt='houses'
        className='h-[22rem] w-full'
        />
        <div className='md:flex py-8'>
          <h3 className='w-full text-center md:text-left text-[3.5vw] md:text-[2.8vw] lg:text-[2vw] tracking-[-0.05em] font-bold md:w-1/2' >Work Culture</h3>
          <p className='md:w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam recusandae et, nam excepturi animi eum hic</p>
        </div>
      </div>
    </div>
  )
}

export default FAQ