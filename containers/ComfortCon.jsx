import React from 'react'
import {ComfortSec, WhatReal} from '../components'
const ComfortCon = () => {
  return (
    <section className=' sm:px-8 md:px-0'>
        <ComfortSec/>
        <div className='flex md:flex-row flex-col-reverse gap-12 mt-32'>
          <WhatReal 
          photo1='/assets/real7.jpeg'
          photo2='/assets/real3.jpeg'
          photo3='/assets/real5.jpeg'
          heading='FOR YOU AND YOURS'
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum nobis explicabo.'
          buttonText='see more'
          />
        </div>
    </section>
  )
}

export default ComfortCon