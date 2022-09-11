import React from 'react'
import Link from 'next/link'
import { WhatReal } from '../components'

const ProductsBanner = () => {
  return (
    <section className=' sm:px-8 md:px-0 mx-auto pb-6 px-8 md:w-5/6 lg:w-4/6 pb-6 px-8 h-auto'>
      <div className='flex md:flex-row-reverse flex-col-reverse gap-12 mt-32'>
          <WhatReal 
          photo1='/assets/rent2.jpeg'
          photo2='/assets/rent5.jpeg'
          heading='EVERYTHING YOU NEED'
          desc='Property that has simple, plain yet sophisticated impression with futuristic and beautify expression. You can also adjust the content and design to your taste'
          url='/Search?listing_status=rent'
          buttonText='see more'
          />
        </div>
    </section>
  )
}

export default ProductsBanner