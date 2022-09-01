import React from 'react'
import Link from 'next/link'
import { WhatReal } from '../components'

const ProductsBanner = () => {
  return (
    <section className=' sm:px-8 md:px-0'>
      <div className='flex md:flex-row-reverse flex-col-reverse gap-12 mt-32'>
          <WhatReal 
          photo1='/assets/real2.jpeg'
          photo2='/assets/rent.webp'
          heading='EVERYTHING YOU NEED'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum nobis explicabo.'
          buttonText='see more'
          />
        </div>
    </section>
  )
}

export default ProductsBanner